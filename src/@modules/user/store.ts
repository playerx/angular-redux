
import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { ActionsObservable } from 'redux-observable';
import { Epic } from 'redux-observable-decorator';
import { of } from 'rxjs/observable/of';
import { Action } from 'redux';
import { Observable } from 'rxjs/Rx';
import { UserService } from '@modules/user/services/user.service';
import { StoreBase } from '@modules/common';
import * as mainPage from './pages/main/main.page.store';


export enum ActionType {
	LoadList = '[User][Main] LoadList',
	LoadListSuccess = '[User][Main] LoadListSuccess',
	LoadListError = '[User][Main] LoadListError',
}

type MainAction
	= { type: ActionType.LoadList, filterName: string, filterSurname: string }
	| { type: ActionType.LoadListSuccess, items: any[] }
	| { type: ActionType.LoadListError, error: any };


export const InitialState = {
	mainPage: mainPage.InitialState,

	list23232: [1, 2, 3],
};


@Injectable()
export class Store extends StoreBase<MainAction, any> {
	moduleName = '';

	reducerMap = {
		// mainPage: this.mainPageStore.reducer,
		list23232: (state = InitialState.list23232) => state,
	};

	epics = [
		mainPage.Store,
		Store
	];


	reducer = (state = InitialState, action: MainAction) => {
		switch (action.type) {
			case ActionType.LoadList:
				return state;

			case ActionType.LoadListSuccess:
				return state;

			default:
				return state;
		}
	}


	// constructor(
	// 	private mainPageStore: mainPage.Store,
	// 	private userService: UserService
	// ) { super(); }


	// @Epic()
	// LoadList = (stream: ActionsObservable<MainAction>) => stream
	// 	.ofType(ActionType.LoadList)
	// 	.switchMap(x =>
	// 		this.userService.loadList()
	// 			.map(items => (<MainAction>{ type: ActionType.LoadListSuccess, items: items }))
	// 			.catch(err => of(<MainAction>{ type: ActionType.LoadListError, error: err }))
	// 	)
}
