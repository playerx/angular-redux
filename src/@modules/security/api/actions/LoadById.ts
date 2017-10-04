import { State } from '../model';
import { Types, ActionBase } from '../actions';

export class LoadById extends ActionBase<State> {
	type = Types.LoadList;
}
