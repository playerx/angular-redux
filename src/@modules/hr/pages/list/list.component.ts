import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
// import * as loan from '@modules/loan';
import * as user from '@modules/user';
import * as hr from '@modules/hr';
import { Observable } from 'rxjs/Rx';


@Component({
	selector: 'hr-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	title = 'hr-list';

	items$: Observable<any>;

	constructor(
		// private userStore: user.Store,
		// private hrActions: hr.Actions,
		private store: NgRedux<any>
	) { }

	ngOnInit() {
		// this.items$ = this.hrStore.select(x => x.list23232);

		// this.userStore.dispatch({
		// 	type: user.ActionType.LoadList,
		// 	filterName: '',
		// 	filterSurname: ''
		// });

		// this.hrActions.dispatch({
		// 	type: hr.ActionType.LoadList,
		// 	filterName: '',
		// 	filterSurname: ''
		// });
	}

	loadHRList() {
		this.store.dispatch({
			type: hr.ActionType.LoadList,
			filterName: '',
			filterSurname: ''
		});
	}

	loadUserList() {
		this.store.dispatch({
			type: user.ActionType.LoadList,
			filterName: '',
			filterSurname: ''
		});
	}
}
