import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// import { LoanModule } from '@modules/loan';
import { UserModule } from '@modules/user';
import { HRModule } from '@modules/hr';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RootStoreModule } from '@modules/common';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		// RouterModule.forRoot(),
		UserModule,
		RootStoreModule,
		HRModule,
		// StoreModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
