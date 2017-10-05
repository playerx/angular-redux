import { Action } from 'redux';
import { dispatch } from '@angular-redux/store';

export abstract class ActionBase implements Action {

	set module(value: string) {
		this.moduleName = value;
		this.type = this.moduleName + ' ' + this.constructor.name;
	}

	private moduleName: string;
	type: string;

	@dispatch()
	dispatch = () => this.build()

	constructor() {
		this.type = this.constructor.name;
	}

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
