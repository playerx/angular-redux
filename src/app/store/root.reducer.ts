import { Injectable } from '@angular/core';
import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';

import { UserReducer } from '@modules/user/api';


@Injectable()
export class RootReducer {

	constructor(
		private userReducer: UserReducer
	) { }

	compose() {
		return composeReducers(
			defaultFormReducer(),
			combineReducers({
				user: this.userReducer.reducer,
				router: routerReducer,
			}));
	}
}
