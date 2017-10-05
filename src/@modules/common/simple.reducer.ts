import { Reducer } from 'redux';


const simpleReducerFactory = function (initialState) {
	initialState = null;

	return function simpleReducer<TState>(state: TState, action): Reducer<TState> {

		if (!action.reduce) {
			return initialState;
		}

		return action.reduce(state);
	};
};

interface RootReducer {
	[key: string]: any;

	with: (props: {}) => {};
}

export function rootReducer(rootState): RootReducer {
	const initialValue = {
		with: function (props: {}) {
			Object.keys(props).forEach(key => this[key] = props[key]);

			delete this['with'];
			return this;
		}
	};

	return Object.keys(rootState).reduce((result, key) => {
		result[key] = simpleReducerFactory(rootState[key]);
		return result;
	}, initialValue);
}
