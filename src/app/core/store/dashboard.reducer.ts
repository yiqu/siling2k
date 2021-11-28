import { createAction, Action, on, createReducer } from "@ngrx/store"
import { DashboardTab, SilingDashboardUiState } from "./dashboard.state";
import * as fromDashboardUiActions from './dashboard.actions';

const initialState: SilingDashboardUiState = {
  allTabSelections: [
    {
      display: 'Expanded View',
      id: 'expandedView',
      index: 0,
      tabIcon: 'collections'
    },
    {
      display: 'Compact View',
      id: 'compactView',
      index: 1,
      tabIcon: 'table_chart'
    }
  ],
  currentSelection: undefined
}

export const dashboardUiReducer = createReducer(
  initialState,

  on(fromDashboardUiActions.setDashboardTabSelection, (state, { tabIndex }) => {
    let selection: DashboardTab | undefined;
    if (state.allTabSelections) {
      selection = state.allTabSelections.find((sel) => {
        return (sel.index + '') === tabIndex;
      });
    }

    return {
      ...state,
      currentSelection: selection
    }
  }),
)
