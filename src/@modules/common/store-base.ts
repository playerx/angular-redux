import { dispatch } from '@angular-redux/store';
import { Action } from 'redux';

export abstract class StoreBase<TAction extends Action>{

	reducerMap: any;

	epics: any[];

	@dispatch()
	dispatch = (action: TAction) => action

	abstract reducer(state: any, action: TAction): any;
}
