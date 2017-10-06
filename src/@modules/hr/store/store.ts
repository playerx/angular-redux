import { Injectable } from '@angular/core';
import { StoreBase, createEmptyReducer } from '@modules/common';
import { Actions, ActionType } from './actions';
import { Epic } from 'redux-observable-decorator';
import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs/observable/of';

import { UserService } from '../services/user.service';
import { InitialState, State } from './state';


@Injectable()
export class Store extends StoreBase<Actions, State> {

	constructor(
		private userService: UserService
	) { super(); }


	@Epic()
	LoadList = (stream: ActionsObservable<Actions>) => stream
		.ofType(ActionType.LoadList)
		.switchMap(x =>
			this.userService.loadList()
				.map(items => (<Actions>{ type: ActionType.LoadListSuccess, items: items }))
				.catch(err => of(<Actions>{ type: ActionType.LoadListError, error: err }))
		)
}
