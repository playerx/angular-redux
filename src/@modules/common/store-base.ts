import { dispatch, Selector, Comparator, NgRedux } from '@angular-redux/store';
import { Action } from 'redux';
import { Observable } from 'rxjs/Rx';
import { resolveToFunctionSelector } from '@angular-redux/store/lib/src/components/selectors';

export abstract class StoreBase<TAction extends Action, TState>{

	abstract moduleName: string;

	constructor(private store: NgRedux<any>) {
	}

	@dispatch()
	dispatch = (action: TAction) => action

	select = <S>(
		selector?: Selector<TState, S>,
		comparator?: Comparator): Observable<S> =>
		(this.store['_store$'] as Observable<TState>)
			.map(x => x[this.moduleName])
			.distinctUntilChanged()
			.map(resolveToFunctionSelector(selector))
			.distinctUntilChanged(comparator)

}
