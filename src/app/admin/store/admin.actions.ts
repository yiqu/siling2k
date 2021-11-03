import { createAction, props } from '@ngrx/store';
import { SilingCompany } from './admin.state';

const GET_COMPANIES_START: string = "[Admin/API] Get Siling companies start";
const GET_COMPANIES_SUCCESS: string = "[Admin/API] Get Siling companies success";
const GET_COMPANIES_FAILED: string = "[Admin/API] Get Siling companies failure";

const ADD_COMPANY_START: string = "[Admin/API] Add Siling company start";
const ADD_COMPANY_SUCCESS: string = "[Admin/API] Add Siling company success";
const ADD_COMPANY_FAILED: string = "[Admin/API] Add Siling company failure";

export const getComapniesStart = createAction(
  GET_COMPANIES_START,
)

export const getComapniesSuccess = createAction(
  GET_COMPANIES_SUCCESS,
  props<{companies: SilingCompany[], date: number}>()
)

export const getComapniesFailure = createAction(
  GET_COMPANIES_FAILED,
  props<{errMsg: string}>()
)

export const addCompanyStart = createAction(
  ADD_COMPANY_START,
  props<{company: SilingCompany}>()
)

export const addCompanySuccess = createAction(
  ADD_COMPANY_SUCCESS,
  props<{company: SilingCompany, date: number}>()
)

export const addCompanyFailure = createAction(
  ADD_COMPANY_FAILED,
  props<{errMsg: string}>()
)
