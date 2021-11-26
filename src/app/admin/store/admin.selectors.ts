import {createFeatureSelector, createSelector} from '@ngrx/store';
import { ActionForCompany, AdminState, SilingCompany } from './admin.state';
import * as fromAdminActions from './admin.actions';
import * as fromRouterSelectors from '../../store/router/router.selectors';

export const selectAdminFeatureState = createFeatureSelector<AdminState>("admin");

export const getSilingCompanies = createSelector(
  selectAdminFeatureState,
  (state): SilingCompany[] => {
    return state.companies;
  }
);

export const getSilingCompaniesLoading = createSelector(
  selectAdminFeatureState,
  (state): boolean => {
    return state.apiLoading;
  }
);

export const getSilingCompanyById = (coId: string) => createSelector(
  getSilingCompanies,
  (state: SilingCompany[]): SilingCompany | undefined => {
    const co = state.find((res) => {
      return res.id === coId;
    })
    return co;
  }
);

export const getSilingCompanyByRouteParam = createSelector(
  getSilingCompanies,
  fromRouterSelectors.selectRouteNestedParams,
  (state: SilingCompany[], nestedParams): SilingCompany | undefined  => {
    const currentCoId: string | undefined = nestedParams.companyId;
    const co = state.find((res) => {
      return res.id === currentCoId;
    });
    return co;
  }
);


export const getSilingCompanyActionId = createSelector(
  getSilingCompanies,
  fromRouterSelectors.selectRouteNestedParams,
  (state: SilingCompany[], nestedParams): ActionForCompany => {
    const currentCoId: string | undefined = nestedParams.companyId;
    const co = state.find((res) => {
      return res.id === currentCoId;
    });
    const actionId = nestedParams.adminSilingCompanyActionId;
    return {
      company: co,
      actionId
    }
  }
);
