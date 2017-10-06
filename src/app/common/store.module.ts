import { NgModule, Injector } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter, routerReducer } from '@angular-redux/router';
import { provideReduxForms, composeReducers, defaultFormReducer } from '@angular-redux/form';
import { combineReducers } from 'redux';
import { createEpics } from 'redux-observable-decorator';

import * as user from '@modules/user';


@NgModule({
	imports: [NgReduxModule]
})
export class StoreModule {

	get initialState() {
		return {
			user: user.InitialState
		};
	}

	get reducers() {
		return composeReducers(
			defaultFormReducer(),
			combineReducers({
				router: routerReducer,
				user: composeReducers(this.userStore.reducer, combineReducers(this.userStore.reducerMap)),
			})
		);
	}

	get epics() {
		const epicClasses = [
			...this.userStore.epics
		];

		const epicInstances = epicClasses.map(x => {
			return this.injector.get(x);
		});

		return epicInstances.map(x => createEpics(x));
	}


	constructor(
		private userStore: user.Store,
		private injector: Injector,
		public store: NgRedux<any>,
		devTools: DevToolsExtension,
	) {
		// Tell Redux about our reducers and epics. If the Redux DevTools
		// chrome extension is available in the browser, tell Redux about
		// it too.
		store.configureStore(
			this.reducers,
			this.initialState,
			[...this.epics],
			devTools.isEnabled() ? [devTools.enhancer()] : []);

		// // Enable syncing of Angular router state with our Redux store.
		// if (ngReduxRouter) {
		// 	ngReduxRouter.initialize();
		// }

		// Enable syncing of Angular form state with our Redux store.
		provideReduxForms(store);
	}
}
