import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable-decorator';
import { of } from 'rxjs/observable/of';

import * as Actions from './actions';
import { CustomerService } from './customer.service';
import { CustomerActions } from './actions';


@Injectable()
export class UserEpics {

	constructor(
		private customerService: CustomerService,
		private userActions: CustomerActions
	) { }


	@Epic()
	LoadList = stream => stream
		.ofType(Actions.Types.LoadList)
		.map(x => { console.log('asd'); return x; })
		.switchMap(x =>
			this.customerService.loadList()
				.map(items => this.userActions.LoadListSuccess(items))
				.catch(err => of(this.userActions.LoadListError(err)))
		)


	@Epic()
	Ping = (x) => x
		.ofType(Actions.Types.Ping)
		.mapTo({ type: 'PONG' })
}
