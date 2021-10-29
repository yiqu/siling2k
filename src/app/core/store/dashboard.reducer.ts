import { createAction, Action, on, createReducer } from "@ngrx/store"
import { SilingDashboardState } from "./core.state";
import { SilingDashboardUiState } from "./dashboard.state";
import * as fromDashboardUiActions from './dashboard.actions';

const initialState: SilingDashboardUiState = {
  silingIdsToHide: []
}

export const dashboardUiReducer = createReducer(
  initialState,
  on(fromDashboardUiActions.setSilingIdsToHide, (state, { ids }) => {
    return {
      ...state,
      silingIdsToHide: ids
    }
  }),

)
