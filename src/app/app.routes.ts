export const appRoutes = [
	{ path: '', redirectTo: '/hr', pathMatch: 'full' },
	{ path: 'hr', loadChildren: '@modules/hr/module#HRModule' },
	{ path: 'user', loadChildren: '@modules/user/module#UserModule' },
];
