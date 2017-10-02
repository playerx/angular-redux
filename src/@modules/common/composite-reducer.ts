import { Subject } from 'rxjs/Rx';
import { Action } from 'redux';
import { Type } from '@angular/core';


type Reducer<TState> = (state: TState, action: Action) => TState;

export function compose<TState>(reducers: [Reducer<TState>]): Reducer<TState> {
	return (state, action) =>
		reducers.reduce((newState, reducer) =>
			reducer(newState, action), state);
}
