import { Action } from 'redux';
import { dispatch } from '@angular-redux/store';

export abstract class ActionBase implements Action {
	static Type = '';

	type: string;
	private _module: string;
	private _title: string;


	set module(value: string) {
		this._module = value;
		this.updateType();
	}
	get module() {
		return this._module;
	}

	set title(value: string) {
		this._title = value;
		this.updateType();
	}
	get title() {
		return this._module;
	}


	constructor() {
		this.updateType();
	}


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

	private updateType() {
		this.type = (this._module ? (this._module + ' ') : '') + (this._title || this.constructor.name);

		// Black Magic
		const t: any = this.constructor;
		t.Type = this.type;
	}

	protected reduce(state) {
		return state;
	}
}
