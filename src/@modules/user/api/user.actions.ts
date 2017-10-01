import { Action } from 'redux';


export const Types = {
	LoadList: '[User] Load List',
	LoadListSuccess: '[User] Load List Success',
	LoadListError: '[User] Load List Error',
	LoadById: '[User] Load by id',
	Add: '[User] Add'
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

	constructor(
		public id: number
	) { }
}

export class Add implements Action {
	type = Types.Add;

	constructor(
		firstName: string,
		lastName: string,
		age: number
	) { }
}
