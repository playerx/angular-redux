import { Action } from 'redux';
import { dispatch } from '@angular-redux/store';

export abstract class ActionBase implements Action {
	abstract type: string;

	@dispatch()
	dispatch = () => {
		const result: any = {};

		for (const key in this) {
			if (key === 'constructor') { continue; }

			result[key] = this[key];
		}

		result.reduce = this.reduce;

		return result;
	}

	reduce(state) {
		return state;
	}
}
