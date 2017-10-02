import { Injectable } from '@angular/core';
import { UserEpics } from '@modules/user/api';
import { createEpics } from 'redux-observable-decorator';


@Injectable()
export class RootEpics {
	constructor(
		private userEpics: UserEpics,
	) { }


	compose() {
		const result = [
			this.userEpics
		];

		return result.map(x => createEpics(x));
	}
}
