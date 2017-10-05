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
		const t = rootReducer(DefaultAppState).with({
			router: routerReducer
		});

		return composeReducers(
			defaultFormReducer(),
			combineReducers(t)
		);
	}
}
