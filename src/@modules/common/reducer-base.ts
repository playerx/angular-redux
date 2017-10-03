import { Subject } from 'rxjs/Rx';
import { Action } from 'redux';
import { Type } from '@angular/core';


type Reducer<TState> = (state: TState, action: Action) => TState;

export abstract class ReducerBase<TState> {

	reducer: Reducer<TState>;

	reducerMapping: { [actionType: string]: Reducer<TState> };


	constructor() {
		const actionFunctions: { [actionType: string]: Reducer<TState> } = this.reducerMapping || Object.getPrototypeOf(this);

		this.reducer = this.compose(actionFunctions);
	}

	abstract get initialState();


	private compose(obj: { [actionType: string]: Reducer<TState> }) {
		return (state: TState, action: Action) => obj[action.type] ? obj[action.type](state, action) : (state || this.initialState);
	}
}

