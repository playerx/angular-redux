import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable-decorator';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class LoanService {

	loadList() {

		return Observable.of([
			{ name: 'Item 1' },
			{ name: 'Item 2' },
			{ name: 'Item 3' },
		]);
	}
}
