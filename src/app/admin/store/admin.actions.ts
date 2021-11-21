import { createAction, props } from '@ngrx/store';
import { ShowHideData, SilingCompany } from './admin.state';

const GET_COMPANIES_START: string = "[Admin/API] Get Siling companies start";
const GET_COMPANIES_SUCCESS: string = "[Admin/API] Get Siling companies success";
const GET_COMPANIES_FAILED: string = "[Admin/API] Get Siling companies failure";

const ADD_COMPANY_START: string = "[Admin/API] Add Siling company start";
const ADD_COMPANY_SUCCESS: string = "[Admin/API] Add Siling company success";
const ADD_COMPANY_FAILED: string = "[Admin/API] Add Siling company failure";

const GET_SHOW_HIDE_COMPANIES_START: string = "[Admin/API] Get show/hide companies start";
const GET_SHOW_HIDE_COMPANIES_SUCCESS: string = "[Admin/API] Get show/hide companies success";
const GET_SHOW_HIDE_COMPANIES_FAILED: string = "[Admin/API] Get show/hide companies failure";

export const getCompaniesStart = createAction(
  GET_COMPANIES_START,
)

export const getCompaniesSuccess = createAction(
  GET_COMPANIES_SUCCESS,
  props<{companies: SilingCompany[], date: number, successMsg: string}>()
)

export const getCompaniesFailure = createAction(
  GET_COMPANIES_FAILED,
  props<{errMsg: string}>()
)

export const addCompanyStart = createAction(
  ADD_COMPANY_START,
  props<{company: SilingCompany}>()
)

export const addCompanySuccess = createAction(
  ADD_COMPANY_SUCCESS,
  props<{company: SilingCompany, date: number, successMsg: string}>()
)

export const addCompanyFailure = createAction(
  ADD_COMPANY_FAILED,
  props<{errMsg: string}>()
)

export const getShowHideCompaniesStart = createAction(
  GET_SHOW_HIDE_COMPANIES_START,
)

export const getShowHideCompaniesSuccess = createAction(
  GET_SHOW_HIDE_COMPANIES_SUCCESS,
  props<{payload: ShowHideData, date: number, successMsg: string}>()
)

export const getShowHideCompaniesFailure = createAction(
  GET_SHOW_HIDE_COMPANIES_FAILED,
  props<{errMsg: string}>()
)
