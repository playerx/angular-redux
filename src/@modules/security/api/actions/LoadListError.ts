import { State } from '../model';
import { Types, ActionBase } from '../actions';

export class LoadListError extends ActionBase<State> {
	type = Types.LoadList;

	error: string;

	reduce(state) {
		state.error = this.error;

		return state;
	}
}
