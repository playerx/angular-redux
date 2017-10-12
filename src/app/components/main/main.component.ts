import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Dispatcher } from 'angular-redux-dynamic-modules';
import * as user from '@modules/user';
import * as hr from '@modules/hr';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	title = 'main';

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
