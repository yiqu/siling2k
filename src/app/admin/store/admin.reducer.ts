import { createAction, Action, on, createReducer } from "@ngrx/store"
import { AdminState } from "./admin.state";
import * as fromAdminActions from './admin.actions';

const initialState: AdminState = {
  apiLoading: false,
  apiErrMsg: undefined,
  apiError: false,
  companies: []

}

export const adminInfoReducer = createReducer(
  initialState,
  on(fromAdminActions.getComapniesStart, (state) => {
    return {
      ...state,
      apiLoading: true
    }
  }),

  on(fromAdminActions.getComapniesSuccess, (state, {companies, date}) => {
    return {
      ...state,
      companies,
      apiLoading: false,
      apiError: false,
      apiErrMsg: undefined
    }
  }),

  on(fromAdminActions.getComapniesFailure, (state, {errMsg}) => {
    return {
      ...state,
      apiLoading: false,
      apiError: true,
      apiErrMsg: errMsg
    }
  })
)
