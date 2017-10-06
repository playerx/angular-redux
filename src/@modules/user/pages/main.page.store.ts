
import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable-decorator';
import { of } from 'rxjs/observable/of';
import { UserService } from '@modules/user/services/user.service';
import { Action } from 'redux';
import { Observable } from 'rxjs/Rx';


enum ActionType {
	LoadList = '[User][Main] LoadList',
	LoadListSuccess = '[User][Main] LoadListSuccess',
	LoadListError = '[User][Main] LoadListError',
}

type MainAction
	= { type: ActionType.LoadList, filterName: string, filterSurname: string }
	| { type: ActionType.LoadListSuccess, items: any[] }
	| { type: ActionType.LoadListError, error: any };



@Injectable()
export class MainPageStore {

	initialState = {
		items: []
	};

	reducer(state = this.initialState, action: MainAction) {
		switch (action.type) {
			case ActionType.LoadList:
				return state;

			case ActionType.LoadListSuccess:
				return state;
		}
		return state;
	}



	constructor(
		private userService: UserService
	) { }


	@Epic()
	LoadList = stream => stream
		.ofType(ActionType.LoadList)
		.switchMap(x =>
			this.userService.loadList()
				.map(items => (<MainAction>{ type: ActionType.LoadListSuccess, items: items }))
				.catch(err => of(<MainAction>{ type: ActionType.LoadListError, error: 'err' }))
		)
}
