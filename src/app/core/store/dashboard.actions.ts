import { createAction, props } from '@ngrx/store';
import { DashboardTab } from './dashboard.state';


const SET_DASHBOARD_TAB_SELECTION: string = "[Siling/UI] Set dashboard view tab selection";

export const setDashboardTabSelection = createAction(
  SET_DASHBOARD_TAB_SELECTION,
  props<{tabIndex: string}>()
)
