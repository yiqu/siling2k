import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SilingCompany } from '../admin/store/admin.state';
import { SilingData } from '../models/general.models';
import { ShowHideCompanyList, ShowHideList } from '../settings/store/settings.state';
import { RestService } from '../shared/services/rest.service';
import { AppState } from '../store/global/app.reducer';
import * as fromCoreActions from './store/core.actions';
import * as fromCoreSelectors from './store/core.selectors';
import { SilingDashboardData } from './store/core.state';

@Injectable({
  providedIn: 'root'
})
export class SilingCoreService {

  public isEntrySaveLoading$: Observable<boolean> = this.store.select(fromCoreSelectors.getSaveIsLoading);
  public isDashboardDataLoading$: Observable<boolean> = this.store.select(fromCoreSelectors.isDashboardDataLoading);
  public dashboardData$: Observable<SilingDashboardData> = this.store.select(fromCoreSelectors.getSilingDashboardData);


  constructor(private store: Store<AppState>, private rs: RestService) {

  }

  public saveSilingEntry(entry: SilingData): void {
    this.store.dispatch(fromCoreActions.saveSilingEntryStart({payload: entry}));
  }

  public getSilingDataByInsName(names: string[]) {
    if (names && names.length > 0) {
      this.store.dispatch(fromCoreActions.getSilingDataByNameStart({names: names}));
    }
  }

  public fetchSilingCompanies(): Observable<SilingCompany[]> {
    return this.rs.getCollection<SilingCompany>('settings/kqpro/companies/all');
  }

  public fetchShowHideList(): Observable<ShowHideCompanyList> {
    return this.rs.getDocument('settings/kqpro/showHideList');
  }

}
