import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { StoreModule } from 'app/store/module';

import { UserService } from './services/user.service';
import { Store as MainPageStore } from './pages/main/main.page.store';
import { Store as ModuleStore } from './store';


@NgModule({
	declarations: [],
	exports: [],
	imports: [CommonModule],
	providers: [MainPageStore, ModuleStore, UserService],
})
export class UserModule { }
