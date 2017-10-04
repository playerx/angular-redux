import { Reducer } from 'redux';

export function simpleReducer<TState>(state: TState, action): Reducer<TState> {
	return action.reduce(state);
}


export function rootReducer(rootState): { with: (props: {}) => {} } {

	const initialValue = {
		with: function (props: {}) {
			Object.keys(props).forEach(key => this[key] = props[key]);

			return this;
		}
	};

	return Object.keys(rootState).reduce((result, key) => {
		result[key] = simpleReducer;
		return result;
	}, initialValue);
}
