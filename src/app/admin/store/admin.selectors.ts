import {createFeatureSelector, createSelector} from '@ngrx/store';
import { AdminState, SilingCompany } from './admin.state';
import * as fromAdminActions from './admin.actions';


export const selectAdminFeatureState = createFeatureSelector<AdminState>("admin");

export const getSilingCompanies = createSelector(
  selectAdminFeatureState,
  (state): SilingCompany[] => {
    return state.companies;
  }
);

