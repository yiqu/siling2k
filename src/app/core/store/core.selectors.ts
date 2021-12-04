import {createFeatureSelector, createSelector} from '@ngrx/store';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid,
  ApexLegend, ApexMarkers, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { SilingData, SilingDataDetail } from 'src/app/models/general.models';
import { ApexChartData } from 'src/app/shared/components/line-chart/line-chart.model';
import { capitalizeFirstLetter, getLocaleNumber } from 'src/app/shared/general.utils';
import * as fromCoreActions from './core.actions';
import { SilingDashboardData, SilingDashboardState, SilingDataCollection, SilingDataDetailCollection } from './core.state';


export const selectCoreFeatureState = createFeatureSelector<SilingDashboardState>("dashboard");

export const getSaveIsLoading = createSelector(
  selectCoreFeatureState,
  (state): boolean => {
    return state.entrySaveLoading;
  }
);

export const isDashboardDataFirstTimeLoading = createSelector(
  selectCoreFeatureState,
  (state): boolean => {
    return state.firstTimeLoading && state.silingDataLoading;
  }
);

export const isDataLoading = createSelector(
  selectCoreFeatureState,
  (state): boolean => {
    return state.silingDataLoading;
  }
);

export const dataLastFetched = createSelector(
  selectCoreFeatureState,
  (state): number | undefined => {
    return state.silingDataLastFetched;
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
    let flexPercent = 100;
    if (allSilingInsKeys.length > 0) {
      flexPercent = Math.floor(100 / allSilingInsKeys.length);
    }

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
        detailArray.push({
          ...current,
          profit: difference,
          profitPercent: differencePercent
        });
      });
      const reversed = JSON.parse(JSON.stringify(detailArray));
      resultData[key] = reversed.reverse();
    });

    return {
      data: resultData,
      keys: shownNames,
      flexNumber: flexPercent
    };
  }
);

export const getChartData = createSelector(
  getSilingDashboardData,
  (state: SilingDashboardData): ApexChartData | undefined => {
    const silingSerie: ApexAxisChartSeries = [];

    // get all dates from all siling entries
    const allPossibleDates: number[] = [];
    state.keys.forEach((key: string) => {
      if (state.data && state.data[key]) {
        state.data[key].forEach((res: SilingDataDetail) => {
          allPossibleDates.push(res.date);
        });
      }
    });

    // sort dates by descending
    allPossibleDates.sort((date1, date2) => {
      return date1 > date2 ? 1 : -1;
    });

    // remove duplicated dates, turn back to array
    const uniqueDates: Set<number> = new Set(allPossibleDates);
    const datesArray: number[] = Array.from(uniqueDates);

    state.keys.forEach((key: string) => {
      const name: string | undefined = capitalizeFirstLetter(key);

      const collection: SilingDataDetail[] = state.data[key];
      const collectEntities: {[key: number]: number} = {};
      collection.forEach((col: SilingDataDetail) => {
        collectEntities[col.date] = col.amount;
      });
      const collectionArr: number[] = [];
      datesArray.forEach((date: number, index: number) => {
        if (collectEntities[date] !== undefined) {
          collectionArr.push(+collectEntities[date]);
        } else {
          collectionArr.push(NaN);
        }
      });

      let resultArr: number[]= [];
      let previousValue = 0;

      datesArray.forEach((res, index) => {
        if (isNaN(collectionArr[index])) {
          resultArr.push(previousValue);
        } else {
          previousValue = collectionArr[index];
          resultArr.push(collectionArr[index]);
        }
      });

      silingSerie.push({
        name,
        data: resultArr
      });
    });

    return {
      series: silingSerie,
      chart: getChartConfig(),
      dataLabels: getLabels(),
      markers: getMarkers(),
      title: getTitle(),
      fill: getFill(),
      yaxis: getYAxis(),
      xaxis: getXAxis(datesArray),
      tooltip: getTooltip(),
      legend: getLegend(),
      grid: getGrid()
    };
  }
);

export const getSummaryData = createSelector(
  getSilingDashboardData,
  (state: SilingDashboardData) => {
    let sumAmount: {[key: string]: number} = {};
    let total: number = 0;
    let latestDate = 0;

    state.keys.forEach((key: string, index: number) => {
      if (state.data[key]) {
        const sorted: SilingDataDetail[] = JSON.parse(JSON.stringify(state.data[key]));
        sorted.sort((res1, res2) => {
          return res1.date > res2.date ? 1 : -1;
        });
        const recentEntry = sorted[(state.data[key]?.length-1) ?? 0];
        if (index === 0) {
          latestDate = recentEntry.date;
        }

        let latestAmount: number = +(recentEntry?.amount);
        latestAmount = isNaN(latestAmount) ? 0 : latestAmount;
        sumAmount[key] = latestAmount;
        total += latestAmount;

        if (latestDate < recentEntry?.date) {
          latestDate = recentEntry.date
        }
      }

    });
    return {
      sumAmount: sumAmount,
      lastUpdated: latestDate,
      total
    }
  }
);

export function getChartConfig(): ApexChart {
  return {
    type: "line",
    height: 350,
    zoom: {
      type: "x",
      enabled: true,
      autoScaleYaxis: true
    },
    toolbar: {
      autoSelected: "zoom"
    },
    width: '100%',
  };
}

export function getLabels(): ApexDataLabels {
  return {
    enabled: false
  };
}

export function getMarkers(): ApexMarkers {
  return {
    size: 0
  };
}

export function getTitle(): ApexTitleSubtitle {
  return {
    text: "Siling Growth by Date",
    align: "left"
  };
}

export function getFill(): ApexFill {
  return {
    type: "gradient",
    gradient: {
      opacityFrom: 0.9,
      opacityTo: 0.9
    },
  };
}

export function getYAxis(): ApexYAxis {
  return {
    labels: {
      formatter: function(val: number) {
        return val ? ('$'+(+val).toLocaleString(undefined)) : val+'';
      }
    },
    title: {
      text: "$ Amount"
    }
  };
}

export function getXAxis(axisData: number[]): ApexXAxis {
  return {
    type: "datetime",
    categories: [...axisData]
  };
}

export function getTooltip(): ApexTooltip {
  return {
    shared: true,
    y: {
      formatter: function(val: number, opts) {
        return val ? '$'+getLocaleNumber(val) : val+'';
      }
    }
  };
}

export function getLegend(): ApexLegend {
  return {
    show: true,
    position: 'top',
    horizontalAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '15px',
  };
}

export function getGrid(): ApexGrid {
  return {
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  };
}
