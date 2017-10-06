import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { StoreModule } from 'app/store/module';

import { Epics } from './store/epics';
import { LoanService } from './services/loan.service';


@NgModule({
	declarations: [],
	exports: [],
	imports: [CommonModule],
	providers: [Epics, LoanService],
})
export class LoanModule { }
