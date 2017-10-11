import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
// import * as loan from '@modules/loan';
import * as user from '@modules/user/api';
import * as hr from '@modules/hr/api';
import { Observable } from 'rxjs/Rx';
import { Dispatcher } from 'app/components/dispatcher';
import { AppState } from 'app/app.state';


@Component({
	selector: 'user-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	title = 'user-list';

	@select((x: AppState) => x.HR.list23232)
	items$: Observable<any>;

	constructor(
		private store: Dispatcher<hr.PublicAction | user.PublicAction>
	) { }


	ngOnInit() {
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
