import * as paginationActions from './pagination.actions';
import { PaginationModel } from '../store/pagination.model';

const initialState : PaginationModel | any = {
    pageNumber: 1,
    offset: 0
}

export function reducer(state: PaginationModel = initialState , action: any) {
    switch (action.type) {
        case paginationActions.CHANGE_PAGE:
            state = action.payload
            return state
        default:
            return state
    }
}


