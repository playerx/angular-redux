import { dispatch, Selector, Comparator, NgRedux } from '@angular-redux/store';
import { Action } from 'redux';
import { Observable } from 'rxjs/Rx';
import { resolveToFunctionSelector } from '@angular-redux/store/lib/src/components/selectors';

export abstract class StoreBase<TAction extends Action>{

	@dispatch()
	dispatch = (action: TAction) => action

}
