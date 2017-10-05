import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable-decorator';
import { of } from 'rxjs/observable/of';

import * as actions from './actions';
import { LoanService } from '../services/loan.service';


@Injectable()
export class Epics {

	constructor(
		private loanService: LoanService
	) { }


	@Epic()
	LoadList = stream => stream
		.ofType(actions.Types.LoadList)
		.map(x => x)
		.switchMap(x =>
			this.loanService.loadList()
				.map(items => new actions.LoadListSuccess(items).build())
				.catch(err => of(new actions.LoadListError(err).build()))
		)

	@Epic()
	Ping = (x) => x
		.ofType(actions.Types.Ping)
		.mapTo(new actions.Pong().build())
}
