import { State as HRState } from '@modules/hr';
import { State as UserState } from '@modules/user';

export interface AppState {
	HR: HRState;
	User: UserState;
}
