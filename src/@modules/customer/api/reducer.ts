import { Injectable } from '@angular/core';
import { ReducerBase } from '@modules/common';
import { Action } from 'redux';
import { Subject } from 'rxjs/Rx';

import * as userActions from './actions';
import { State, DefaultState } from './model';


@Injectable()
export class UserReducer extends ReducerBase<State> {


	get initialState() {
		return DefaultState;
	}


	reducerMapping = {
		[userActions.Types.LoadList]: this.LoadList,
		[userActions.Types.LoadById]: this.LoadById,
		[userActions.Types.LoadListSuccess]: this.LoadListSuccess,
		[userActions.Types.Add]: this.Add,
		['PONG']: this.Pong,
	};


	LoadList(state: State, payload: userActions.LoadList) {
		console.log('LoadList reduced');

		return state;
	}

	LoadById(state, payload: userActions.LoadById) {
		console.log('LoadById reduced');

		return state;
	}

	LoadListSuccess(state, payload: userActions.LoadListSuccess) {
		console.log('LoadListSuccess reduced');

		return state;
	}

	Add(state, payload: userActions.Add) {
		console.log('Add reduced');

		return state;
	}

	Pong(state, payload) {
		console.log('Pong', state, payload);

		return state;
	}
}
