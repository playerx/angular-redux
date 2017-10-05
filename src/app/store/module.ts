import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { provideReduxForms } from '@angular-redux/form';
import { createLogger } from 'redux-logger';

import { RootReducer } from './root.reducer';
import { RootEpics } from './root.epics';

// The top-level reducers and epics that make up our app's logic.
import { AppState, DefaultAppState } from './root.model';
// import { RootEpics } from './epics';


@NgModule({
	imports: [NgReduxModule],
	providers: [RootEpics, RootReducer],
})
export class StoreModule {
	constructor(
		public store: NgRedux<AppState>,
		devTools: DevToolsExtension,
		// ngReduxRouter: NgReduxRouter,
		rootReducer: RootReducer,
		rootEpics: RootEpics,
	) {
		// Tell Redux about our reducers and epics. If the Redux DevTools
		// chrome extension is available in the browser, tell Redux about
		// it too.
		store.configureStore(
			rootReducer.compose(),
			DefaultAppState,
			[...rootEpics.compose()],
			devTools.isEnabled() ? [] : []);

		// // Enable syncing of Angular router state with our Redux store.
		// if (ngReduxRouter) {
		// 	ngReduxRouter.initialize();
		// }

		// Enable syncing of Angular form state with our Redux store.
		provideReduxForms(store);
	}
}
