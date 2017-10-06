import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Action } from 'redux';
import { ActionTypes } from './action-types';


export class LoadList implements Action {
	type = ActionTypes.LoadList;
}

export class LoadListSuccess implements Action {
	type = ActionTypes.LoadListSuccess;

	constructor(
		public list: any[]
	) { }
}

export class LoadListError implements Action {
	type = ActionTypes.LoadListError;

	constructor(
		public error: any
	) { }
}

export class LoadById implements Action {
	type = ActionTypes.LoadById;

	constructor(
		public id: number
	) { }
}

export class Add implements Action {
	type = ActionTypes.Add;

	constructor(
		firstName: string,
		lastName: string,
		age: number
	) { }
}

