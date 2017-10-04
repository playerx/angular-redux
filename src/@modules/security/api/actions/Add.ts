import { State } from '../model';
import { Types, ActionBase } from '../actions';

export class Add extends ActionBase<State> {
	type = Types.LoadList;
}
