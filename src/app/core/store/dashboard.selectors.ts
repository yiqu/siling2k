import {createFeatureSelector, createSelector} from '@ngrx/store';
import { DashboardTab, SilingDashboardUiState } from './dashboard.state';

export const selectDashboardUiFeatureState = createFeatureSelector<SilingDashboardUiState>("dashboardUI");

export const getCurrentTabSelection = createSelector(
  selectDashboardUiFeatureState,
  (state): DashboardTab | undefined => {
    return state.currentSelection;
  }
);

export const getAllTabs = createSelector(
  selectDashboardUiFeatureState,
  (state): DashboardTab[] => {
    return state.allTabSelections;
  }
);

export const getSelectedTabIndex = createSelector(
  getAllTabs,
  getCurrentTabSelection,
  (state: DashboardTab[], currentTab?: DashboardTab): number => {
    if (state && currentTab) {
      const index = state.findIndex((tab) => {
        return tab.id === currentTab.id;
      });
      return index;
    }
    return 0;
  }
);
