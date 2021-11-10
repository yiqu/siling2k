import { createAction, Action, on, createReducer } from "@ngrx/store"
import * as fromCoreActions from './core.actions';
import { SilingDashboardState } from "./core.state";


const initialState: SilingDashboardState = {
  entrySaveLoading: false,
  entryApiErr: false,
  entryToSave: undefined,
  entryApiErrMsg: undefined,
  silingDataBeingFetchedNames: [],
  silingDataErr: false,
  silingDataLoading: false,
  silingData: undefined,
}

export const silingDashboardReducer = createReducer(
  initialState,
  on(fromCoreActions.saveSilingEntryStart, (state, { payload }) => {
    return {
      ...state,
      entrySaveLoading: true,
      entryToSave: payload
    }
  }),

  on(fromCoreActions.saveSilingEntrySuccess, (state, {payload, date}) => {
    return {
      ...state,
      entryApiErr: false,
      entryApiErrMsg: undefined,
      entrySaveLoading: false,
      entryToSave: payload
    }
  }),

  on(fromCoreActions.saveSilingEntryFailure, (state, {errMsg}) => {
    return {
      ...state,
      entryApiErr: true,
      entryApiErrMsg: errMsg,
      entrySaveLoading: false
    }
  }),

  on(fromCoreActions.getSilingDataByNameStart, (state, { names }) => {
    return {
      ...state,
      silingDataBeingFetchedNames: names,
      silingDataLoading: true
    }
  }),

  on(fromCoreActions.getSilingDataByNameSuccess, (state, { payload, date }) => {
    return {
      ...state,
      silingDataLoading: false,
      silingData: payload,
      silingDataErrMsg: undefined,
      silingDataErr: false
    }
  }),

  on(fromCoreActions.getSilingDataByNameFailure, (state, { errMsg }) => {
    return {
      ...state,
      silingDataLoading: false,
      silingDataErrMsg: errMsg,
      silingDataErr: true
    }
  }),
)
