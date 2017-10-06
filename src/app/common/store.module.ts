import { NgModule, Injector } from '@angular/core';
import { StoreConfig, StoreConfigs } from '@modules/common';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter, routerReducer } from '@angular-redux/router';
import { provideReduxForms, composeReducers, defaultFormReducer } from '@angular-redux/form';
import { combineReducers } from 'redux';
import { createEpics } from 'redux-observable-decorator';

import * as user from '@modules/user';
import * as hr from '@modules/hr';


@NgModule({
	imports: [NgReduxModule]
})
export class StoreModule {

	storeConfigs: StoreConfigs = {
		'HR': hr.storeConfig,
	};

	constructor(
		private injector: Injector,
		public store: NgRedux<any>,
		devTools: DevToolsExtension,
	) {
		const initialConfig = this.reigsterModules();

		// Tell Redux about our reducers and epics. If the Redux DevTools
		// chrome extension is available in the browser, tell Redux about
		// it too.
		store.configureStore(
			initialConfig.rootReducer,
			initialConfig.initialState,
			initialConfig.epics,
			devTools.isEnabled() ? [devTools.enhancer()] : []);

		// // Enable syncing of Angular router state with our Redux store.
		// if (ngReduxRouter) {
		// 	ngReduxRouter.initialize();
		// }

		// Enable syncing of Angular form state with our Redux store.
		provideReduxForms(store);
	}

	reigsterModules(): any {

		const items = this.storeConfigs;

		// Initial State
		const initialState = {};
		const reducerMap = {};
		const epicClasses = [];

		for (const key in items) {
			if (!items.hasOwnProperty(key)) { continue; }

			initialState[key] = items[key].InitialState;
			reducerMap[key] = items[key].reducer;
			epicClasses.push(items[key].Store);
		}

		// Reducers
		const rootReducer = composeReducers(
			defaultFormReducer(),
			combineReducers({
				router: routerReducer,
				...reducerMap
			})
		);

		// Epics
		const epicInstances = epicClasses.map(x => {
			return this.injector.get(x);
		});

		const epics = epicInstances.map(x => createEpics(x));


		return {
			rootReducer: rootReducer,
			initialState: initialState,
			epics: epics
		};
	}
}
