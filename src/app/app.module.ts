import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoanModule } from '@modules/loan';

import { AppComponent } from './app.component';
import { StoreModule } from './store/module';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		// RouterModule.forRoot(),
		StoreModule,
		LoanModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
