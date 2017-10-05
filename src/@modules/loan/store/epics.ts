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
		.map(x => { console.log('asd'); return x; })
		.switchMap(x =>
			this.loanService.loadList()
				.map(items => new actions.LoadListSuccess(items))
				.catch(err => of(new actions.LoadListError(err)))
		)

	@Epic()
	Ping = (x) => x
		.ofType(actions.Types.Ping)
		.mapTo({ type: 'PONG' })
}
