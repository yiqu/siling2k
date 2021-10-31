import { createAction, props } from '@ngrx/store';
import { ShowHideCompanyList, ShowHideList } from './settings.state';

const SHOW_HIDE_LIST_UPDATE_START: string = "[Settings/API] Show/hide list update start";
const SHOW_HIDE_LIST_UPDATE_SUCCESS: string = "[Settings/API] Show/hide list update success";
const SHOW_HIDE_LIST_UPDATE_FAILED: string = "[Settings/API] Show/hide list update failed";

const GET_SHOW_HIDE_LIST_START: string = "[Settings/API] Get show/hide list start";
const GET_SHOW_HIDE_LIST_SUCCESS: string = "[Settings/API] Get show/hide list success";
const GET_SHOW_HIDE_LIST_FAILED: string = "[Settings/API] Get show/hide list failed";

export const showHideListUpdateStart = createAction(
  SHOW_HIDE_LIST_UPDATE_START,
  props<{showHideData: ShowHideCompanyList}>()
)

export const showHideListUpdateSuccess = createAction(
  SHOW_HIDE_LIST_UPDATE_SUCCESS,
  props<{showHideData: ShowHideCompanyList, successMsg: string}>()
)

export const showHideListUpdateFailure = createAction(
  SHOW_HIDE_LIST_UPDATE_FAILED,
  props<{errMsg: string}>()
)

export const getShowHideListStart = createAction(
  GET_SHOW_HIDE_LIST_START
)

export const getShowHideListSuccess = createAction(
  GET_SHOW_HIDE_LIST_SUCCESS,
  props<{payload: ShowHideCompanyList, successMsg: string}>()
)

export const getShowHideListFailure = createAction(
  GET_SHOW_HIDE_LIST_FAILED,
  props<{errMsg: string}>()
)

