import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

import { ActionTypes } from './action-types';
import * as actions from './actions';


@Injectable()
export class Dispatcher {

	@dispatch()
	LoadList = () => new actions.LoadList()

	LoadListSuccess = (list) => new actions.LoadListSuccess(list);

	LoadListError = (error) => new actions.LoadListError(error);


	@dispatch()
	LoadById = (id: number) => new actions.LoadById(id)

	@dispatch()
	Add = (x) => new actions.Add(x.name, x.lastName, x.age)

	@dispatch()
	Ping = () => ({
		type: ActionTypes.Ping,
		payload: null,
	})
}
