import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable-decorator';

import * as actions from './user.actions';


@Injectable()
export class UserEpics {

	@Epic()
	LoadList = (x) => x.ofType(actions.Types.LoadList).mapTo({ type: 'PONG' })

	@Epic()
	LoadById = (x) => x.ofType(actions.Types.LoadById).mapTo({ type: 'ACTION_OUT' })
}
