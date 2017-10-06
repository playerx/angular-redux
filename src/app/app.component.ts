import { Component, OnInit } from '@angular/core';
import * as loan from '@modules/loan';
import * as user from '@modules/user';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'app';

	constructor(private userStore: user.Store) { }

	ngOnInit() {
		this.userStore.dispatch({
			type: user.ActionType.LoadList,
			filterName: '',
			filterSurname: ''
		});
	}
}
