import { createAction, props } from '@ngrx/store';
import { SilingCompany } from './admin.state';

const GET_COMPANIES_START: string = "[Admin/API] Get Siling companies start";
const GET_COMPANIES_SUCCESS: string = "[Admin/API] Get Siling companies success";
const GET_COMPANIES_FAILED: string = "[Admin/API] Get Siling companies failure";

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
