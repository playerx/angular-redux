import { Component, OnInit } from '@angular/core';
import * as loan from '@modules/loan';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'app';

	constructor() { }

	ngOnInit() {
		new loan.LoadList().dispatch();
		new loan.Ping().dispatch();
	}
}
