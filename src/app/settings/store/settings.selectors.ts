import {createFeatureSelector, createSelector} from '@ngrx/store';
import { AdminState, SilingCompany } from 'src/app/admin/store/admin.state';
import { SettingsState, ShowHideCompanyList, ShowHideList } from './settings.state';
import * as fromAdminSelectors from '../../admin/store/admin.selectors';


export const selectSettingsFeatureState = createFeatureSelector<SettingsState>("settings");
export const selectAdminFeatureState = createFeatureSelector<AdminState>("admin");

export const hiddenList = createSelector(
  selectSettingsFeatureState,
  (state): SilingCompany[] => {
    return state.showHideLists ? state.showHideLists.hiding : [];
  }
);

export const shownList = createSelector(
  selectSettingsFeatureState,
  (state): SilingCompany[] => {
    return state.showHideLists ? state.showHideLists.showing : [];
  }
);

export const getApiLoading = createSelector(
  selectSettingsFeatureState,
  (state): boolean => {
    return state.showHideLoading;
  }
);

export const getShowHideList = createSelector(
  fromAdminSelectors.getSilingCompanies,
  hiddenList,
  shownList,
  (allCompanies: SilingCompany[], hiddenList: SilingCompany[],
    shownList: SilingCompany[]): ShowHideCompanyList => {

    const showList: SilingCompany[] = [];
    const hideList: SilingCompany[] = [];

    /**
     * Create the show & hide list from all comapny array
     */
    allCompanies.forEach((co: SilingCompany) => {
      const existInHidden = hiddenList.find((institutionId: SilingCompany) => {
        return co.id === institutionId.id;
      });
      if (existInHidden) {
        hideList.push(co);
      } else {
        showList.push(co);
      }
    });

    /**
     * Sort show & hidden based on index values of show/hide database stored position
     */
    if (hiddenList && shownList) {
      hideList.sort((x: SilingCompany, y: SilingCompany) => {
        const xIndex = hiddenList.findIndex((co) => {
          return co.id === x.id;
        });
        const yIndex = hiddenList.findIndex((co) => {
          return co.id === y.id;
        });

        return xIndex > yIndex ? 1 : -1;
      });

      showList.sort((x: SilingCompany, y: SilingCompany) => {
        const xIndex = shownList.findIndex((co) => {
          return co.id === x.id;
        });
        const yIndex = shownList.findIndex((co) => {
          return co.id === y.id;
        });

        return xIndex > yIndex ? 1 : -1;
      });
    }

    return {
      hiding: hideList,
      showing: showList
    };
  }
);

