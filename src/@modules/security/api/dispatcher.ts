
import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Types } from './actions';
import { LoadById } from './actions/LoadById';
import { Add } from './actions/Add';


@Injectable()
export class UserActions {

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
