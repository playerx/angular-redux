import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserModule } from '@modules/user';
import { HRModule } from '@modules/hr';
import { StoreModule } from 'angular-redux-dynamic-modules';

import { AppComponent } from './components/app/app.component';

import { appRoutes } from './app.routes';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot(appRoutes),
		StoreModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
