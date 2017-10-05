import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Action } from 'redux';
import { ActionBase } from '@modules/common';


export const Module = '[Loan]';

export const Types = {
	LoadList: Module + ' Load List',
	LoadListSuccess: Module + ' Load List Success',
	LoadListError: Module + ' Load List Error',
	LoadById: Module + ' Load by id',
	Add: Module + ' Add',
	Ping: Module + ' Ping',
	Pong: Module + ' Pong',
};



export class LoadList extends ActionBase {
	module = Module;

	constructor(
		private nameFilter?: string,
		private fromAge?: number,
		private toAge?: number,
	) { super(); }


	reduce(state) {
		console.log('LoadList', this.nameFilter, this.fromAge, this.toAge, this.test(5));
		return state;
	}

	private test(n) {
		return n + 1;
	}
}

export class LoadListSuccess extends ActionBase {
	module = Module;
	type = Types.LoadListSuccess;

	constructor(
		private items: any[],
	) { super(); }

	reduce(state) {
		console.log('LoadListSuccess', this.items);
		return { items: [1, 2, 3] };
	}
}

export class LoadListError extends ActionBase {
	module = Module;
	type = Types.LoadListError;

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
	type = Types.Ping;
}

export class Pong extends ActionBase {
	module = Module;
	type = Types.Pong;
}
