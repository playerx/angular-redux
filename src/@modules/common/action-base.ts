import { Action } from 'redux';
import { dispatch } from '@angular-redux/store';

export abstract class ActionBase implements Action {
	abstract type: string;

	@dispatch()
	dispatch: () => this;

	reduce(state) {
		return state;
	}
}
