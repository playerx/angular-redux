import { StoreConfig } from '@modules/common';
import { InitialState } from './store/state';
import { reducer } from './store/reducer';
import { Store } from './store/store';
import { Epics } from './store/epics';


export { ActionType } from './store/actions';
export { State } from './store/state';
export * from './store/store';
export * from './module';


// export const storeConfig: StoreConfig = {
// 	InitialState,
// 	reducer,
// 	epics: [
// 		Epics
// 	],
// };
