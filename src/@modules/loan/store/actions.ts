import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Action } from 'redux';
import { ActionBase } from '@modules/common';


const ROOT = '[User] ';

export const Types = {
	LoadList: ROOT + 'Load List',
	LoadListSuccess: ROOT + 'Load List Success',
	LoadListError: ROOT + 'Load List Error',
	LoadById: ROOT + 'Load by id',
	Add: ROOT + 'Add',
	Ping: ROOT + 'Ping',
};



export class LoadList extends ActionBase {
	type = Types.LoadList;

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
	type = Types.LoadList;

	constructor(
		private items: any[],
	) { super(); }

	reduce(state) {
		console.log('LoadListSuccess', this.items);
		return state;
	}
}

export class LoadListError extends ActionBase {
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
	type = Types.Ping;

	reduce(state) {
		console.log('Ping');
		return state;
	}
}
