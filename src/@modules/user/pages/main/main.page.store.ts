
import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable-decorator';
import { of } from 'rxjs/observable/of';
import { UserService } from '@modules/user/services/user.service';
import { Action } from 'redux';
import { Observable } from 'rxjs/Rx';
import { StoreBase } from '@modules/common';
import { ActionsObservable } from 'redux-observable';


enum ActionType {
	LoadList = 1, // '[User][Main] LoadList',
	LoadListSuccess = 2, // '[User][Main] LoadListSuccess',
	LoadListError = 3, // '[User][Main] LoadListError',
}


type MainAction
	= { type: ActionType.LoadList, filterName: string, filterSurname: string }
	| { type: ActionType.LoadListSuccess, items: any[] }
	| { type: ActionType.LoadListError, error: any };


export const InitialState = {
	items: []
};


@Injectable()
export class Store extends StoreBase<MainAction, any> {

	moduleName = '';

	reducer = (state = InitialState, action: MainAction): any => {

		console.log(state, action);

		switch (action.type) {
			case ActionType.LoadList:
				return state;

			case ActionType.LoadListSuccess:
				return state;

			default:
				return state;
		}
	}




	// @Epic()
	// LoadList = (stream: ActionsObservable<MainAction>) => stream
	// 	.ofType(ActionType.LoadList)
	// 	.switchMap(x =>
	// 		this.userService.loadList()
	// 			.map(items => (<MainAction>{ type: ActionType.LoadListSuccess, items: items }))
	// 			.catch(err => of(<MainAction>{ type: ActionType.LoadListError, error: err }))
	// 	)
}
