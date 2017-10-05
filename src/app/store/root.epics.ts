import { Injectable, Injector } from '@angular/core';
import { Epics as loanEpics } from '@modules/loan';
import { createEpics } from 'redux-observable-decorator';


@Injectable()
export class RootEpics {
	constructor(
		private injector: Injector
	) { }


	compose() {
		const epicClasses = [
			...loanEpics
		];

		const epicInstances = epicClasses.map(x => {
			return this.injector.get(x);
		});

		return epicInstances.map(x => createEpics(x));
	}
}
