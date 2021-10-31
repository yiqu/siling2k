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
      showHideLists: showHideData
    }
  }),

  on(fromSettingsAction.showHideListUpdateFailure, (state, { errMsg }) => {
    return {
      ...state,
      showHideLoading: false,
    }
  }),

)
