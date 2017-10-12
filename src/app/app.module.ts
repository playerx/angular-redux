import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from 'angular-redux-dynamic-modules';

import { AppComponent } from './components/app/app.component';
import { MainComponent } from './components/main/main.component';
import { appRoutes } from './app.routes';

@NgModule({
	declarations: [
		AppComponent,
		MainComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot(appRoutes),
		StoreModule,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
