import {createFeatureSelector, createSelector} from '@ngrx/store';
import { SilingData, SilingDataDetail } from 'src/app/models/general.models';
import * as fromCoreActions from './core.actions';
import { SilingDashboardData, SilingDashboardState, SilingDataCollection, SilingDataDetailCollection } from './core.state';


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

    const allSilingInsKeys: string[] = Object.keys(data);
    const resultData: SilingDataDetailCollection = {};

    allSilingInsKeys.forEach((key: string, index: number) => {
      const arrCopy = JSON.parse(JSON.stringify(data[key]));
      const sortedByDate: SilingData[] = arrCopy.sort((a: SilingData, b: SilingData) => {
        return a.date > b.date ? 1 : -1;
      });

      const detailArray: SilingDataDetail[] = [];

      sortedByDate.forEach((current: SilingData, index: number, arr: SilingData[]) => {
        const previous: SilingData = sortedByDate[index - 1];
        let difference: number = 0;
        let differencePercent: number = 0;
        if (previous && current) {
          difference = current.amount - previous.amount;
          differencePercent = difference / previous.amount;
        }

        console.log(key, previous, current)

        detailArray.push({
          ...current,
          profit: difference,
          profitPercent: differencePercent
        });


      });


      resultData[key] = detailArray;
    });




    console.log(resultData)


    return {
      data: data,
      keys: shownNames
    };
  }
);



