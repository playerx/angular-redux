import { NgModule, Injector, ModuleWithProviders } from '@angular/core';
import { StoreConfig, StoreConfigs } from '@modules/common';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter, routerReducer } from '@angular-redux/router';
import { provideReduxForms, composeReducers, defaultFormReducer } from '@angular-redux/form';
import { combineReducers, applyMiddleware } from 'redux';
import { addMiddleware, dynamicMiddlewares } from './dynamic.middleware';

declare var window: any;

const storeConfigs: StoreConfigs = {};


@NgModule({
	imports: [NgReduxModule]
})
export class RootStoreModule {

	constructor(
		private injector: Injector,
		public store: NgRedux<any>,
		devTools: DevToolsExtension,
	) {
		const newConfig = this.reigsterModules();

		store.configureStore(
			newConfig.reducer,
			newConfig.InitialState,
			[dynamicMiddlewares],
			devTools.isEnabled() ? [devTools.enhancer()] : []);

		if (window.devToolsExtension) {
			window.devToolsExtension.updateStore(store['_store']);
		}

		// Enable syncing of Angular form state with our Redux store.
		provideReduxForms(store);
	}


	reigsterModules(): StoreConfig {
		const items = storeConfigs;

		// Initial State
		const initialState = {};
		const reducerMap = {};
		const epicClasses = [];

		for (const key in items) {
			if (!items.hasOwnProperty(key)) { continue; }

			initialState[key] = items[key].InitialState;
			reducerMap[key] = items[key].reducer;
			epicClasses.push(...items[key].epics);
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
			InitialState: initialState,
			reducer: rootReducer,
			epics: epics
		};
	}
}



@NgModule({
	imports: [NgReduxModule]
})
export class StoreModule {

	constructor(
		private injector: Injector,
		public store: NgRedux<any>,
		private devTools: DevToolsExtension,
	) {
		const newConfig = this.reigsterModules();

		store.replaceReducer(x => newConfig.InitialState); // Trivial reducer that just returns the saved state.
		store.dispatch({ type: 'REHYDRATE' }); // Bogus action to trigger the reducer above.
		store.replaceReducer(newConfig.reducer);

		newConfig.epics.forEach(x => addMiddleware(x));
	}

	static Config(moduleName: string, config: StoreConfig): ModuleWithProviders {

		storeConfigs[moduleName] = config;

		return {
			ngModule: StoreModule
		};
	}

	reigsterModules(): StoreConfig {
		const items = storeConfigs;

		// Initial State
		const initialState = {};
		const reducerMap = {};
		const epicClasses = [];

		for (const key in items) {
			if (!items.hasOwnProperty(key)) { continue; }

			initialState[key] = items[key].InitialState;
			reducerMap[key] = items[key].reducer;
			epicClasses.push(...items[key].epics);
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
			InitialState: initialState,
			reducer: rootReducer,
			epics: epics
		};
	}
}
