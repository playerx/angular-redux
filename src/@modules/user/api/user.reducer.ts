import { Injectable } from '@angular/core';
import { ReducerBase } from '@modules/common';
import { Action } from 'redux';
import { Subject } from 'rxjs/Rx';

import * as userActions from './user.actions';
import { State } from './model';


@Injectable()
export class UserReducer extends ReducerBase<State> {

	LoadList = this.subscribe(userActions.Types.LoadList, (state, payload: userActions.LoadList) => {
		console.log('LoadList reduced');

		return state;
	});

	LoadById = this.subscribe(userActions.Types.LoadById, (state, payload: userActions.LoadById) => {
		console.log('LoadById reduced');

		return state;
	});

	Add = this.subscribe(userActions.Types.Add, (state, payload: userActions.Add) => {
		console.log('Add reduced');

		return state;
	});

}
