import { ActionBase } from '@modules/common';


export class LoadCustomerRequest extends ActionBase {
	module = Module;

	constructor(
		private filterName: string,
		private filterSurname: string,
	) { super(); }
}


export class LoadCustomerComplete extends ActionBase {
	module = Module;

	constructor(
		private items: any[]
	) { super(); }

	reduce(state) {
		// this.items;
	}
}
