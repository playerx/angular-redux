import { ActionType, Actions } from './actions';
import { InitialState, State } from './state';


export function reducer(state = InitialState, action: Actions): State {
	switch (action.type) {
		case ActionType.LoadList:
			return state;

		case ActionType.LoadListSuccess:
			return state;

		default:
			return state;
	}
}