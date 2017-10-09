import { Injectable } from '@angular/core';
import { StoreBase } from '@modules/common';
import { Action } from './actions';
import { NgRedux, Comparator, Selector } from '@angular-redux/store';
import { Observable } from 'rxjs/Rx';
import { State } from './state';
import { resolveToFunctionSelector } from '@angular-redux/store/lib/src/components/selectors';


@Injectable()
export class Store extends StoreBase<Action, State> {
	moduleName = 'HR';
}
