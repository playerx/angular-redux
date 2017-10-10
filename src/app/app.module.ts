import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// import { LoanModule } from '@modules/loan';
import { UserModule } from '@modules/user';
import { HRModule } from '@modules/hr';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { StoreModule } from 'angular-redux-dynamic-modules';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		// RouterModule.forRoot(),
		StoreModule,
		UserModule,
		HRModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
