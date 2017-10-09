
export enum ActionType {
	LoadList = '[HR][Main] LoadList',
	LoadListSuccess = '[HR][Main] LoadListSuccess',
	LoadListError = '[HR][Main] LoadListError',
}

export type PublicAction
	= { type: ActionType.LoadList, filterName: string, filterSurname: string }
	| { type: ActionType.LoadListSuccess, items: any[] }
	| { type: ActionType.LoadListError, error: any };


export type Action
	= { type: 'Test' }
	| { type: 'Test2' }
	| PublicAction;
