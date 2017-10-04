import { Injectable } from '@angular/core';
import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';

import { rootReducer } from '@modules/common';
import { DefaultAppState } from './root.model';


@Injectable()
export class RootReducer {

	constructor() { }

	compose() {
		return composeReducers(
			defaultFormReducer(),
			// combineReducers({
			// 	user: userReducer,
			// 	customer: customerReducer,
			// })
			combineReducers(rootReducer(DefaultAppState).with({
				router: routerReducer
			}))
		);
	}
}

// export function composeOld<TState>(reducers: [any]): any {
// 	return reducers.reduce(
// 		(red1, red2) =>
// 			(state, action) =>
// 				red2(red1(state, action), action)
// 	);
// }

// export function compose<TState>(reducers: [any]): any {
// 	return (state, action) =>
// 		reducers.reduce((newState, reducer) =>
// 			reducer(newState, action), state);
// }


// export function simpleReducer(state, action) {
// 	return action.reduce(state);
// }
