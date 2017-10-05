import * as user from '@modules/user/api';
import * as loan from '@modules/loan';

export interface AppState {
	user: user.State;
	loan: loan.State;
}

export const DefaultAppState = {
	user: user.DefaultState,
	loan: loan.DefaultState
};
