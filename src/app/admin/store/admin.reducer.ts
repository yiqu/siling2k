import { createAction, Action, on, createReducer } from "@ngrx/store"
import { AdminState } from "./admin.state";
import * as fromAdminActions from './admin.actions';

const initialState: AdminState = {
  apiLoading: false,
  apiErrMsg: undefined,
  apiError: false,
  companies: [],
  companyBeingAdded: undefined,
  showHideData: {
    showing: [],
    hiding: []
  }
}

export const adminInfoReducer = createReducer(
  initialState,
  on(fromAdminActions.getCompaniesStart, (state) => {
    return {
      ...state,
      apiLoading: true
    }
  }),

  on(fromAdminActions.getCompaniesSuccess, (state, {companies, date}) => {
    return {
      ...state,
      companies,
      apiLoading: false,
      apiError: false,
      apiErrMsg: undefined
    }
  }),

  on(fromAdminActions.getCompaniesFailure, (state, {errMsg}) => {
    return {
      ...state,
      apiLoading: false,
      apiError: true,
      apiErrMsg: errMsg
    }
  }),

  on(fromAdminActions.addCompanyStart, (state, { company }) => {
    return {
      ...state,
      apiLoading: true,
      companyBeingAdded: company
    }
  }),

  on(fromAdminActions.addCompanySuccess, (state, { company, date }) => {
    return {
      ...state,
      apiLoading: false,
      companyBeingAdded: company
    }
  }),

  on(fromAdminActions.addCompanyFailure, (state, { errMsg }) => {
    return {
      ...state,
      apiLoading: false,
      apiError: true,
      apiErrMsg: errMsg,
      companyBeingAdded: undefined
    }
  }),

  on(fromAdminActions.getShowHideCompaniesStart, (state) => {
    return {
      ...state,
      apiLoading: true
    }
  }),

  on(fromAdminActions.getShowHideCompaniesSuccess, (state, {payload, date, successMsg}) => {
    return {
      ...state,
      showHideData: payload,
      apiLoading: false,
      apiError: false,
      apiErrMsg: undefined
    }
  }),

  on(fromAdminActions.getShowHideCompaniesFailure, (state, {errMsg}) => {
    return {
      ...state,
      apiLoading: false,
      apiError: true,
      apiErrMsg: errMsg
    }
  }),
)
