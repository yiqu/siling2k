import { createAction, props } from '@ngrx/store';
import { ShowHideCompanyList, ShowHideList } from './settings.state';

const SHOW_HIDE_LIST_UPDATE_START: string = "[Settings/API] Show/hide list update start";
const SHOW_HIDE_LIST_UPDATE_SUCCESS: string = "[Settings/API] Show/hide list update success";
const SHOW_HIDE_LIST_UPDATE_FAILED: string = "[Settings/API] Show/hide list update failed";

export const showHideListUpdateStart = createAction(
  SHOW_HIDE_LIST_UPDATE_START,
  props<{showHideData: ShowHideCompanyList}>()
)

export const showHideListUpdateSuccess = createAction(
  SHOW_HIDE_LIST_UPDATE_SUCCESS,
  props<{showHideData: ShowHideCompanyList}>()
)

export const showHideListUpdateFailure = createAction(
  SHOW_HIDE_LIST_UPDATE_FAILED,
  props<{errMsg: string}>()
)
