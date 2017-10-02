import { Injectable } from '@angular/core';
import { ReducerBase } from '@modules/common';
import { Action } from 'redux';
import { Subject } from 'rxjs/Rx';

import * as userActions from './user.actions';
import { State, DefaultState } from './model';


@Injectable()
export class UserReducer extends ReducerBase<State> {

	getInitialState() {
		return DefaultState;
	}

	[userActions.Types.LoadList](state: State, payload: userActions.LoadList) {
		console.log('LoadList reduced');

		return state;
	}

	[userActions.Types.LoadById](state, payload: userActions.LoadById) {
		console.log('LoadById reduced');

		return state;
	}

	[userActions.Types.LoadListSuccess](state, payload: userActions.LoadListSuccess) {
		console.log('LoadListSuccess reduced');

		return state;
	}

	[userActions.Types.Add](state, payload: userActions.Add) {
		console.log('Add reduced');

		return state;
	}

	['PONG'](state, payload) {
		console.log('Pong', state, payload);

		return state;
	}
}
