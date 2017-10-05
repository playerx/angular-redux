import { Action } from 'redux';
import { dispatch } from '@angular-redux/store';

export abstract class ActionBase implements Action {
	abstract module: string;
	abstract type: string;

	@dispatch()
	dispatch = () => this.build()

	public build = () => {
		const result: any = {};

		for (const key in this) {
			if (key === 'constructor') { continue; }

			result[key] = this[key];
		}

		return result;
	}

	protected reduce(state) {
		return state;
	}
}
