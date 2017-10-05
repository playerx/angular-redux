import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Action } from 'redux';
import { ActionBase } from '@modules/common';


export const Module = '[Loan]';


export class LoadList extends ActionBase {
	module = Module;

	constructor(
		private nameFilter?: string,
		private fromAge?: number,
		private toAge?: number,
	) { super(); }


	reduce(state) {
		console.log('Success2', this.nameFilter, this.fromAge, this.toAge, this.test(5));
		return state;
	}

	private test(n) {
		return n + 1;
	}
}

export class LoadListSuccess extends ActionBase {
	module = Module;
	title = 'Listo';

	constructor(
		private items: any[],
	) { super(); }

	reduce(state) {
		console.log('[User][Main] LoadListSuccess', this.items);
		return { items: [1, 2, 3] };
	}
}

export class LoadListError extends ActionBase {
	module = Module;

	constructor(
		private error: any,
	) { super(); }

	reduce(state) {
		console.log('LoadListError', this.error);
		return state;
	}
}

export class Ping extends ActionBase {
	module = Module;
}

export class Pong extends ActionBase {
	module = Module;
}


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
