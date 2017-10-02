import { Component, OnInit } from '@angular/core';
import { UserActions } from '@modules/user/api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'app';


	constructor(
		private userActions: UserActions
	) { }


	ngOnInit() {
		this.userActions.LoadList();
		// this.userActions.Ping();
		// this.userActions.Ping();
	}
}
