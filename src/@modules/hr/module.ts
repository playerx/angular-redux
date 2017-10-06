import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './services/user.service';
import { Store } from './store/store';


@NgModule({
	declarations: [],
	exports: [],
	imports: [CommonModule],
	providers: [Store, UserService],
})
export class HRModule { }
