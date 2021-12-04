import { createAction, props } from '@ngrx/store';
import { SilingData } from 'src/app/models/general.models';
import { SilingDataCollection } from './core.state';

const SAVE_SILING_ENTRY_START: string = "[Siling/API] Save entry start";
const SAVE_SILING_ENTRY_SUCCESS: string = "[Siling/API] Save entry successful";
const SAVE_SILING_ENTRY_FAILURE: string = "[Siling/API] Save entry start failure";

const GET_SILING_DATA_BY_NAME_START: string = "[Siling/API] Get siling data by ins. name start";
const GET_SILING_DATA_BY_NAME_SUCCESS: string = "[Siling/API] Get siling data by ins. name successful";
const GET_SILING_DATA_BY_NAME_FAILURE: string = "[Siling/API] Get siling data by ins. name failure";

const REFRESH_SILING_DATA: string = "[Siling/API] Refetch data";

export const saveSilingEntryStart = createAction(
  SAVE_SILING_ENTRY_START,
  props<{payload: SilingData}>()
)

export const saveSilingEntrySuccess = createAction(
  SAVE_SILING_ENTRY_SUCCESS,
  props<{payload: SilingData, date: number}>()
)

export const saveSilingEntryFailure = createAction(
  SAVE_SILING_ENTRY_FAILURE,
  props<{errMsg: string}>()
)

export const getSilingDataByNameStart = createAction(
  GET_SILING_DATA_BY_NAME_START,
  props<{names: string[]}>()
)

export const getSilingDataByNameSuccess = createAction(
  GET_SILING_DATA_BY_NAME_SUCCESS,
  props<{payload: SilingDataCollection, date: number}>()
)

export const getSilingDataByNameFailure = createAction(
  GET_SILING_DATA_BY_NAME_FAILURE,
  props<{errMsg: string}>()
)

export const refreshData = createAction(
  REFRESH_SILING_DATA,
)
