import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { forkJoin, Observable } from 'rxjs';
import { SilingCompany } from '../admin/store/admin.state';
import { SilingData } from '../models/general.models';
import { ShowHideCompanyList, ShowHideList } from '../settings/store/settings.state';
import { ApexChartData } from '../shared/components/line-chart/line-chart.model';
import { RestService } from '../shared/services/rest.service';
import { AppState } from '../store/global/app.reducer';
import * as fromCoreActions from './store/core.actions';
import * as fromCoreSelectors from './store/core.selectors';
import { SilingDashboardData, SilingDataCollection, SummaryData } from './store/core.state';
import * as fromDashboardSelectors from './store/dashboard.selectors';
import { DashboardTab } from './store/dashboard.state';
import * as fromDashboardActions from './store/dashboard.actions';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SilingCoreService {

  public isEntrySaveLoading$: Observable<boolean> = this.store.select(fromCoreSelectors.getSaveIsLoading);
  public isDashboardDataFirstTimeLoading$: Observable<boolean> = this.store.select(fromCoreSelectors.isDashboardDataFirstTimeLoading);
  public isDataLoading$: Observable<boolean> = this.store.select(fromCoreSelectors.isDataLoading);
  public dashboardData$: Observable<SilingDashboardData> = this.store.select(fromCoreSelectors.getSilingDashboardData);
  public chartData$: Observable<ApexChartData | undefined> = this.store.select(fromCoreSelectors.getChartData);
  public summary$: Observable<SummaryData> = this.store.select(fromCoreSelectors.getSummaryData);
  public selectTabIndex$: Observable<number> = this.store.select(fromDashboardSelectors.getSelectedTabIndex);
  public dashboardTabs$: Observable<DashboardTab[]> = this.store.select(fromDashboardSelectors.getAllTabs);
  public silingData$: Observable<SilingDataCollection> = this.store.select(fromCoreSelectors.getSilingData);
  public dataLastFetched$: Observable<number | undefined> = this.store.select(fromCoreSelectors.dataLastFetched);
  public companiesShown$: Observable<string[]> = this.store.select(fromCoreSelectors.getSilingDataShownNames);
  public getAllDates$: Observable<number[]> = this.store.select(fromCoreSelectors.getAllDates);

  constructor(private store: Store<AppState>, private rs: RestService) {
  }

  public saveSilingEntry(entry: SilingData): void {
    this.store.dispatch(fromCoreActions.saveSilingEntryStart({payload: entry}));
  }

  public getSilingDataByInsName(names: string[]): void {
    if (names && names.length > 0) {
      this.store.dispatch(fromCoreActions.getSilingDataByNameStart({names: names}));
    }
  }

  public getSilingShowList(): void {
    this.store.dispatch(fromCoreActions.updateSilingToShowIdsStart());
  }

  public fetchSilingCompanies(): Observable<SilingCompany[]> {
    return this.rs.getCollection<SilingCompany>('settings/kqpro/companies/all');
  }

  public fetchShowHideList(): Observable<ShowHideCompanyList> {
    return this.rs.getDocument('settings/kqpro/showHideList');
  }

  public setTab(tabIndex: string) {
    this.store.dispatch(fromDashboardActions.setDashboardTabSelection({tabIndex}));
  }

  public refreshData(): void {
    this.store.dispatch(fromCoreActions.refreshData());
  }

  public getSilingShownIdsObs(): Observable<string[]> {
    return forkJoin({
      allCompanies: this.fetchSilingCompanies(),
      showHideList: this.fetchShowHideList()
    }).pipe(
      map((res) => {
        const allCompanies: SilingCompany[] = res.allCompanies;
        const comapnyToShow: SilingCompany[] = [];
        let companiesHidden: SilingCompany[] = [];
        let companiesShown: SilingCompany[] = [];

        if (res.showHideList && res.showHideList.hiding && res.showHideList.hiding.length > -1) {
          companiesHidden = res.showHideList.hiding;
        }

        if (res.showHideList && res.showHideList.showing && res.showHideList.showing.length > -1) {
          companiesShown = res.showHideList.showing;
        }

        allCompanies.forEach((res: SilingCompany) => {
          const excludeIndex: number = companiesHidden.findIndex((co) => {
            return co.name === res.name;
          });
          if (excludeIndex < 0) {
            comapnyToShow.push(res);
          }
        });

        comapnyToShow.sort((x: SilingCompany, y: SilingCompany) => {
          const xIndex = companiesShown.findIndex((co) => {
            return co.id === x.id;
          });
          const yIndex = companiesShown.findIndex((co) => {
            return co.id === y.id;
          });

          return xIndex > yIndex ? 1 : -1;
        });

        const companiesToShowIds = comapnyToShow.map((showCo) => {
          return showCo.name.toLowerCase();
        });

        return companiesToShowIds;
      })
    )
  }

}
