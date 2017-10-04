import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Action } from 'redux';
import { ActionBase } from '@modules/common';


const ROOT = '[User] ';

export const ActionTypes = {
	LoadList: ROOT + 'Load List',
	LoadListSuccess: ROOT + 'Load List Success',
	LoadListError: ROOT + 'Load List Error',
	LoadById: ROOT + 'Load by id',
	Add: ROOT + 'Add',
	Ping: ROOT + 'Ping',
};



export class LoadList extends ActionBase {
	type = ActionTypes.LoadList;

	reduce(state) {
		console.log('LoadList');
		return state;
	}
}

export class LoadListSuccess extends ActionBase {
	type = ActionTypes.LoadList;

	constructor(
		public list: any[]
	) { super(); }

	reduce(state) {
		console.log('LoadListSuccess');
		return state;
	}
}


