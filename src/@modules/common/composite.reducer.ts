import { Action, Reducer } from 'redux';

export function compose<TState>(reducers: [Reducer<TState>]): Reducer<TState> {
	return (state, action) =>
		reducers.reduce((newState, reducer) =>
			reducer(newState, action), state);
}
