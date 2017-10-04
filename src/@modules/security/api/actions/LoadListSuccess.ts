import { State } from '../model';
import { Types, ActionBase } from '../actions';

export class LoadListSuccess extends ActionBase<State> {
	type = Types.LoadList;

	readonly items: Record<string>;

	reduce(state) {
		state.items = this.items;

		return state;
	}


	private test() {

	}
}
