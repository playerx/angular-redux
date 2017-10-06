
export interface StoreConfig {
	InitialState: any;
	reducer: any;
	Store: any;
}


export interface StoreConfigs { [key: string]: StoreConfig; }
