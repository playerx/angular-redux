import * as user from '@modules/user/api';

export interface AppState {
	user: user.State;
}

export const DefaultAppState = {
	user: user.DefaultState
};
