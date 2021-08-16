import { Action } from '@ngrx/store';
import { PaginationModel } from './pagination.model';

export const CHANGE_PAGE = 'CHANGE_PAGE';

export class SavePageAction implements Action {
    readonly type =  CHANGE_PAGE
    constructor(public payload: PaginationModel ) { }
}

export type Actions = SavePageAction


