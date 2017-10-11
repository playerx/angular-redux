import { MainComponent } from './components/main/main.component';

export const appRoutes = [
	{ path: '', component: MainComponent, pathMatch: 'full' },
	{ path: 'hr', loadChildren: '@modules/hr/module#HRModule' },
	{ path: 'user', loadChildren: '@modules/user/module#UserModule' },
];
