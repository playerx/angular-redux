import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Action } from 'redux';
import { State } from './model';


export const Types = {
	LoadList: '[Security] Load List',
	LoadListSuccess: '[Security] Load List Success',
	LoadListError: '[Security] Load List Error',
	LoadById: '[Security] Load by id',
	Add: '[Security] Add',
	Ping: '[Security] Ping',
};


export abstract class ActionBase<TState> implements Action {
	abstract type: string;

	reduce(state: TState): TState {
		return state;
	}


}
