import { StoreConfig } from '@modules/common';
import { InitialState } from './store/state';
import { reducer } from './store/reducer';
import { Store } from './store/store';


export { ActionType } from './store/actions';
export * from './store/store';
export * from './module';


export const storeConfig: StoreConfig = {
	InitialState: InitialState,
	Store: Store,
	reducer: reducer
};
