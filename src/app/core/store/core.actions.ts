import { createAction, props } from '@ngrx/store';
import { SilingData } from 'src/app/models/general.models';

const SAVE_SILING_ENTRY_START: string = "[Siling/API] Save entry start";
const SAVE_SILING_ENTRY_SUCCESS: string = "[Siling/API] Save entry successful";
const SAVE_SILING_ENTRY_FAILURE: string = "[Siling/API] Save entry start failure";

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
