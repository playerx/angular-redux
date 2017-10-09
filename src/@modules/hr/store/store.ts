import { Injectable } from '@angular/core';
import { StoreBase, createEmptyReducer } from '@modules/common';
import { PublicAction, Action, ActionType } from './actions';
import { Epic } from 'redux-observable-decorator';
import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs/observable/of';

import { UserService } from '../services/user.service';
import { InitialState, State } from './state';


@Injectable()
export class Store extends StoreBase<Action> { }
