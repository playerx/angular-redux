export * from './store/actions';
export * from './store/model';
export * from './module';


import { Epics as StoreEpics } from './store/epics';
import { Epics as ModuleEpics } from './store/epics';

export const Epics = [
	StoreEpics,
	ModuleEpics
];
