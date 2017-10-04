import { Injectable } from '@angular/core';
import { ReducerBase } from '@modules/common';
import { Action } from 'redux';
import { Subject } from 'rxjs/Rx';

import { ActionTypes } from './action-types';
import * as actions from './actions';
import { State, DefaultState } from './model';


@Injectable()
export class UserReducer extends ReducerBase<State> {

	get initialState() {
		return DefaultState;
	}


	[ActionTypes.LoadList](state: State, payload: actions.LoadList) {
		console.log('LoadList reduced');

		return state;
	}

	[ActionTypes.LoadById](state, payload: actions.LoadById) {
		console.log('LoadById reduced');

		return state;
	}

	[ActionTypes.LoadListSuccess](state, payload: actions.LoadListSuccess) {
		console.log('LoadListSuccess reduced');

		return state;
	}

	[ActionTypes.Add](state, payload: actions.Add) {
		console.log('Add reduced');

		return state;
	}

	['PONG'](state, payload) {
		console.log('Pong', state, payload);

		return state;
	}
}
