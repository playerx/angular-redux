import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Action } from 'redux';


@Injectable()
export class Dispatcher<TAction extends Action> {
	constructor(private redux: NgRedux<any>) {
	}

	dispatch(action: TAction) {
		return this.redux.dispatch(action);
	}
}
