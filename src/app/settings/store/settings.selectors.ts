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

export const getShowHideList = createSelector(
  fromAdminSelectors.getSilingCompanies,
  hiddenList,
  (allCompanies: SilingCompany[], hiddenList: SilingCompany[]): ShowHideCompanyList => {

    const showList: SilingCompany[] = [];
    const hideList: SilingCompany[] = [];

    allCompanies.forEach((co: SilingCompany) => {
      console.log(co)
      const existInHidden = hiddenList.find((comapnyId: SilingCompany) => {
        return co.id === comapnyId.id;
      });
      if (existInHidden) {
        hideList.push(co);
      } else {
        showList.push(co);
      }
    });

    return {
      hiding: hideList,
      showing: showList
    };
  }
);
