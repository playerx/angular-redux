import { Injectable } from '@angular/core';
import { StoreBase, createEmptyReducer } from '@modules/common';
import { Action, ActionType } from './actions';
import { Epic } from 'redux-observable-decorator';
import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs/observable/of';

import { UserService } from '../services/user.service';
import { InitialState, State } from './state';


@Injectable()
export class Epics {

	constructor(
		private userService: UserService
	) { }

	@Epic()
	LoadList = (stream: ActionsObservable<Action>) => stream
		.ofType(ActionType.LoadList)
		.switchMap(x => {
			return this.userService.loadList()
				.map(data => (<Action>{ type: ActionType.LoadListSuccess, items: data }))
				.catch(err => of(<Action>{ type: ActionType.LoadListError, error: err }));
		}
		)

}
