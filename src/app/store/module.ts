import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { provideReduxForms } from '@angular-redux/form';
import { createLogger } from 'redux-logger';

import { RootReducer } from './root.reducer';
import { RootEpics } from './root.epics';

// The top-level reducers and epics that make up our app's logic.
import { IAppState } from './model';
// import { RootEpics } from './epics';


@NgModule({
	imports: [NgReduxModule, NgReduxRouterModule],
	providers: [RootEpics],
})
export class StoreModule {
	constructor(
		public store: NgRedux<IAppState>,
		devTools: DevToolsExtension,
		ngReduxRouter: NgReduxRouter,
		rootReducer: RootReducer,
		rootEpics: RootEpics,
	) {
		// Tell Redux about our reducers and epics. If the Redux DevTools
		// chrome extension is available in the browser, tell Redux about
		// it too.
		store.configureStore(
			rootReducer.compose(),
			{},
			[createLogger(), ...rootEpics.compose()],
			devTools.isEnabled() ? [devTools.enhancer()] : []);

		// Enable syncing of Angular router state with our Redux store.
		if (ngReduxRouter) {
			ngReduxRouter.initialize();
		}

		// Enable syncing of Angular form state with our Redux store.
		provideReduxForms(store);
	}
}
