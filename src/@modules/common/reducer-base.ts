import { Subject } from 'rxjs/Rx';
import { Action } from 'redux';
import { Type } from '@angular/core';


export abstract class ReducerBase<TState> {

	private stream = new Subject<any>();

	public reducer(state, action: Action) {
		this.stream.next({
			type: action.type,
			state: state,
			payload: action
		});
	}

	protected subscribe<TAction extends Action>(
		type: string,
		work: (state: TState, payload: TAction) => TState
	) {
		return this.stream
			.filter(x => x.type === type)
			.subscribe(x => work(x.state, x.payload));
	}

	protected subscribe2<TAction extends Action>(
		action: Type<Action>,
		work: (state: TState, payload: TAction) => TState
	) {
		return this.stream
			.filter(x => x.type === new action().type)
			.subscribe(x => work(x.state, x.payload));
	}
}

