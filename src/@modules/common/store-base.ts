import { dispatch } from '@angular-redux/store';
import { Action } from 'redux';

export abstract class StoreBase<TAction extends Action, TState>{

	reducerMap: any;

	epics: any[];

	reducer: (state: TState, action: TAction) => TState;

	@dispatch()
	dispatch = (action: TAction) => action
}
