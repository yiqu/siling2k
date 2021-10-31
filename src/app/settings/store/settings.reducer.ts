import { createAction, Action, on, createReducer } from "@ngrx/store"
import { SettingsState } from "./settings.state"
import * as fromSettingsAction from './settings.actions';


const initialState: SettingsState = {
  showHideLists: {
    hiding: [],
    showing: []
  },
  showHideLoading: false
}

export const settingsReducer = createReducer(
  initialState,

  on(fromSettingsAction.showHideListUpdateStart, (state, { showHideData }) => {
    return {
      ...state,
      showHideLoading: true,
      showHideLists: showHideData
    }
  }),

  on(fromSettingsAction.showHideListUpdateSuccess, (state, { showHideData }) => {
    return {
      ...state,
      showHideLoading: false,
      showHideLists: showHideData,
      err: false,
      errMsg: undefined
    }
  }),

  on(fromSettingsAction.showHideListUpdateFailure, (state, { errMsg }) => {
    return {
      ...state,
      showHideLoading: false,
      err: true,
      errMsg: errMsg
    }
  }),

  on(fromSettingsAction.getShowHideListStart, (state) => {
    return {
      ...state,
      showHideLoading: true,
    }
  }),

  on(fromSettingsAction.getShowHideListSuccess, (state, { payload }) => {
    return {
      ...state,
      showHideLoading: false,
      showHideLists: payload,
      err: false,
      errMsg: undefined
    }
  }),

  on(fromSettingsAction.getShowHideListFailure, (state, { errMsg }) => {
    return {
      ...state,
      showHideLoading: false,
      err: true,
      errMsg: errMsg
    }
  }),

)
