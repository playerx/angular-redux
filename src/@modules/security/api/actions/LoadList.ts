import { State } from '../model';
import { Types, ActionBase } from '../actions';

export class LoadList extends ActionBase<State> {
	type = Types.LoadList;
}
