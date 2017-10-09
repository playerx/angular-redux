import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './services/user.service';
import { Store } from './store/store';
import { StoreModule } from '@modules/common';

import { InitialState } from './store/state';
import { reducer } from './store/reducer';
import { Epics } from './store/epics';


@NgModule({
	declarations: [],
	exports: [],
	imports: [
		CommonModule,
		StoreModule.Config('HR', { InitialState, reducer, epics: [Epics] })
	],
	providers: [Store, UserService, Epics],
})
export class HRModule { }
