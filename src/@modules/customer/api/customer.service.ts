import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class CustomerService {

	loadList() {
		return Observable.of([
			{ name: 'Item 1' },
			{ name: 'Item 2' },
			{ name: 'Item 3' },
		]);
	}
}
