import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './services/user.service';
import { Actions } from './store/actions';

import { InitialState } from './store/state';
import { reducer } from './store/reducer';
import { Epics } from './store/epics';

import { StoreConfigService } from 'angular-redux-dynamic-modules';


@NgModule({
	declarations: [],
	exports: [],
	imports: [
		CommonModule
	],
	providers: [Actions, UserService, Epics],
})
export class HRModule {
	constructor(storeConfig: StoreConfigService) {
		// Register State
		storeConfig.addModule(
			'HR',
			InitialState,
			reducer,
			[Epics]
		);
	}
}
