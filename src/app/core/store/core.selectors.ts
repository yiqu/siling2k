import {createFeatureSelector, createSelector} from '@ngrx/store';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexMarkers, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { SilingData, SilingDataDetail } from 'src/app/models/general.models';
import { ApexChartData } from 'src/app/shared/components/line-chart/line-chart.model';
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

    const allPossibleDates: number[] = [];
    state.keys.forEach((key: string) => {
      if (state.data && state.data[key]) {
        state.data[key].forEach((res: SilingDataDetail) => {
          allPossibleDates.push(res.date);
        });
      }
    });
    allPossibleDates.sort((date1, date2) => {
      return date1 > date2 ? 1 : -1;
    });
    const uniqueDates: Set<number> = new Set(allPossibleDates);
    const datesArray: number[] = Array.from(uniqueDates);

    state.keys.forEach((key: string) => {
      const name: string = key;
      const data: any[] = [];

      datesArray.forEach((date: number) => {
        const detail: SilingDataDetail | undefined = state.data[key].find((res) => {
          return res.date === date;
        });
        data.push([date,  detail?.amount ?? null]);
      });

      silingSerie.push({
        name,
        data: data
      })
    });

    return {
      series: silingSerie,
      chart: getChartConfig(),
      dataLabels: getLabels(),
      markers: getMarkers(),
      title: getTitle(),
      fill: getFill(),
      yaxis: getYAxis(),
      xaxis: getXAxis(),
      tooltip: getTooltip(),
      legend: getLegend(),
      grid: getGrid()
    };
  }
);

export function getChartConfig(): ApexChart {
  return {
    type: "line",
    stacked: true,
    height: 350,
    zoom: {
      type: "x",
      enabled: true,
      autoScaleYaxis: true
    },
    toolbar: {
      autoSelected: "zoom"
    },
    width: '100%'
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
      opacityFrom: 0.6,
      opacityTo: 0.8
    }
  };
}

export function getYAxis(): ApexYAxis {
  return {
    labels: {
      formatter: function(val: number) {
        return val ? (val).toFixed(0) : val+'';
      }
    },
    title: {
      text: "Price"
    }
  };
}

export function getXAxis(): ApexXAxis {
  return {
    type: "datetime"
  };
}

export function getTooltip(): ApexTooltip {
  return {
    shared: true,
    y: {
      formatter: function(val: number) {
        return val ? (val).toFixed(0) : val+'';
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
