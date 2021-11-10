import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromCoreActions from './core.actions';
import { SilingDashboardData, SilingDashboardState, SilingDataCollection } from './core.state';


export const selectCoreFeatureState = createFeatureSelector<SilingDashboardState>("dashboard");

export const getSaveIsLoading = createSelector(
  selectCoreFeatureState,
  (state): boolean => {
    return state.entrySaveLoading;
  }
);

export const isDashboardDataLoading = createSelector(
  selectCoreFeatureState,
  (state): boolean => {
    return state.silingDataLoading;
  }
);

export const getSilingData = createSelector(
  selectCoreFeatureState,
  (state): SilingDataCollection => {
    return state.silingData ?? {};
  }
);

export const getSilingDataShownNames = createSelector(
  selectCoreFeatureState,
  (state): string[] => {
    return state.silingDataBeingFetchedNames;
  }
);

export const getSilingDashboardData = createSelector(
  getSilingDataShownNames,
  getSilingData,
  (shownNames: string[], data: SilingDataCollection): SilingDashboardData => {

    return {
      data: data,
      keys: shownNames
    };
  }
);



