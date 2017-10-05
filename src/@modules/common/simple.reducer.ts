import { Reducer } from 'redux';


const simpleReducerFactory = function (module, initialState) {

	return function simpleReducer<TState>(state: TState, action): Reducer<TState> {

		if (!action.reduce) {
			return state || initialState;
		}

		if ((module || action.module) && (module !== action.module)) {
			return state || initialState;
		}

		return action.reduce(state || initialState);
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
		result[key] = simpleReducerFactory(key, rootState[key]);
		return result;
	}, initialValue);
}
