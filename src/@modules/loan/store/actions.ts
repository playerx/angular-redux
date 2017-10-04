import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Action } from 'redux';
import { ActionBase } from '@modules/common';
import { ActionTypes } from './action-types';


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


