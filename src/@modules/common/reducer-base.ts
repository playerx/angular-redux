import { Subject } from 'rxjs/Rx';
import { Action } from 'redux';
import { Type } from '@angular/core';


type Reducer<TState> = (state: TState, action: Action) => TState;

export abstract class ReducerBase<TState> {

	reducer: Reducer<TState>;

	constructor() {
		const actionFunctions: { [actionType: string]: Reducer<TState> } = Object.getPrototypeOf(this);

		this.reducer = this.compose(actionFunctions);
	}

	abstract getInitialState();


	private compose(obj: { [actionType: string]: Reducer<TState> }) {
		return (state: TState, action: Action) => obj[action.type] ? obj[action.type](state, action) : (state || this.getInitialState());
	}
}

