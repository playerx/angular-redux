import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable-decorator';
import { of } from 'rxjs/observable/of';

import { ActionTypes } from './action-types';
import { Dispatcher } from './dispatcher';
import * as actions from './actions';
import { UserService } from '../services/user.service';


@Injectable()
export class UserEpics {

	constructor(
		private userService: UserService,
		private actionsDispatcher: Dispatcher
	) { }


	@Epic()
	LoadList = stream => stream
		.ofType(ActionTypes.LoadList)
		.map(x => { console.log('asd'); return x; })
		.switchMap(x =>
			this.userService.loadList()
				.map(items => this.actionsDispatcher.LoadListSuccess(items))
				.catch(err => of(this.actionsDispatcher.LoadListError(err)))
		)

	@Epic()
	Ping = (x) => x
		.ofType(ActionTypes.Ping)
		.mapTo({ type: 'PONG' })
}
