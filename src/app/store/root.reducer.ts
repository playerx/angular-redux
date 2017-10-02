import { Injectable } from '@angular/core';
import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';

import { State as UserState, UserReducer } from '@modules/user/api';


@Injectable()
export class RootReducer {

	constructor(
		private userReducer: UserReducer
	) { }

	compose() {
		return composeReducers(
			defaultFormReducer(),
			combineReducers({
				user: compose<UserState>([this.userReducer.reducer, this.userReducer.reducer, this.userReducer.reducer, this.userReducer.reducer]),
				router: routerReducer,
			}));
	}
}

export function composeOld<TState>(reducers: [any]): any {
	return reducers.reduce(
		(red1, red2) =>
			(state, action) =>
				red2(red1(state, action), action)
	);
}

export function compose<TState>(reducers: [any]): any {
	return (state, action) =>
		reducers.reduce((newState, reducer) =>
			reducer(newState, action), state);
}

