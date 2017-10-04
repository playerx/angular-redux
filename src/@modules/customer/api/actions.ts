import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Action } from 'redux';


export const Types = {
	LoadList: '[Customer] Load List',
	LoadListSuccess: '[Customer] Load List Success',
	LoadListError: '[Customer] Load List Error',
	LoadById: '[Customer] Load by id',
	Add: '[Customer] Add',
	Ping: '[Customer] Ping',
};


export class LoadList implements Action {
	type = Types.LoadList;
}

export class LoadListSuccess implements Action {
	type = Types.LoadListSuccess;
}

export class LoadListError implements Action {
	type = Types.LoadListError;
}

export class LoadById implements Action {
	type = Types.LoadById;

	public id: number;
}

export class Add implements Action {
	type = Types.Add;

	firstName: string;
	lastName: string;
	age: number;
}


@Injectable()
export class CustomerActions {

	@dispatch()
	LoadList = () => ({
		type: Types.LoadList,
		payload: null,
	})

	LoadListSuccess = (list) => ({
		type: Types.LoadListSuccess,
		payload: list,
	})

	LoadListError = (error) => ({
		type: Types.LoadListError,
		payload: null,
		error: error
	})

	@dispatch()
	LoadById = (x: LoadById) => ({
		type: Types.LoadById,
		payload: null,
	})

	@dispatch()
	Add = (x: Add) => ({
		type: Types.Add,
		payload: x,
	})

	@dispatch()
	Ping = () => ({
		type: Types.Ping,
		payload: null,
	})
}
