import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { LoanModule } from '@modules/loan';
import { UserModule } from '@modules/user';

import { AppComponent } from './app.component';
import { StoreModule } from './common/store.module';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		// RouterModule.forRoot(),
		StoreModule,
		UserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
