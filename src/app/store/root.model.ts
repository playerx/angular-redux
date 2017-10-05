import * as user from '@modules/user/api';
import * as loan from '@modules/loan';

export const DefaultAppState = {
	[user.Module]: user.DefaultState,
	[loan.Module]: loan.DefaultState
};
