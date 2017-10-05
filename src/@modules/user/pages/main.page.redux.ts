
import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable-decorator';
import { of } from 'rxjs/observable/of';
import { UserService } from '@modules/user/services/user.service';
import { Action } from 'redux';
import { Observable } from 'rxjs/Rx';


export const InitialState = {
	items: []
};

export type MainAction
	= { type: '[User][Main] LoadList', filterName: string, filterSurname: string }
	| { type: '[User][Main] LoadListSuccess', items: any[] };


export function reducer(state = InitialState, action: MainAction) {
	switch (action.type) {
		case '[User][Main] LoadList':
			return state;

		case '[User][Main] LoadListSuccess':
			return state;
	}
	return state;
}


@Injectable()
export class UserEpics {
	constructor(
		private userService: UserService
	) { }

	@Epic()
	LoadList = (stream: Observable<MainAction>): Observable<MainAction> => stream
		.filter(x => x.type === '[User][Main] LoadListSuccess')
		.switchMap(x =>
			this.userService.loadList()
				.map(items => (<MainAction>{ type: '[User][Main] LoadListSuccess', items: items }))
				.catch(err => of(<MainAction>{ type: '[User][Main] LoadList', filterName: 'err' }))
		)
}

