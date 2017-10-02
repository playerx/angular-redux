import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserModule } from '@modules/user/module';

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
		UserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
