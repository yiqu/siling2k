import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromCoreActions from './core.actions';
import { SilingDashboardState } from './core.state';


export const selectCoreFeatureState = createFeatureSelector<SilingDashboardState>("dashboard");

export const getSaveIsLoading = createSelector(
  selectCoreFeatureState,
  (state): boolean => {
    return state.entrySaveLoading;
  }
);



