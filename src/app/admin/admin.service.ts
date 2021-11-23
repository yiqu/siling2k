import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShowHideData, SilingCompany } from './store/admin.state';
import * as fromAdminSelectors from './store/admin.selectors';
import { AppState } from '../store/global/app.reducer';
import * as fromAdminActions from './store/admin.actions';
import { RestService } from '../shared/services/rest.service';
import { FirebaseDocObsAndId } from '../core/store/core.state';
import * as fromSettingSelectors from '../settings/store/settings.selectors';
import { ShowHideCompanyList } from '../settings/store/settings.state';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public getSilingCompanies$: Observable<SilingCompany[]> = this.store.select(fromAdminSelectors.getSilingCompanies);
  public getSilingCompanyLoading$: Observable<boolean> = this.store.select(fromAdminSelectors.getSilingCompaniesLoading);
  public getRawShowHideList$: Observable<ShowHideCompanyList> = this.store.select(fromSettingSelectors.getRawShowHideList);
  public showHideLoading$: Observable<boolean> = this.store.select(fromSettingSelectors.getApiLoading);


  constructor(private store: Store<AppState>, private rs: RestService) {
  }

  fetchSilingCompanies(): void {
    this.store.dispatch(fromAdminActions.getCompaniesStart());
  }

  getSilingCompanies(): Observable<SilingCompany[]> {
    return this.rs.getCollection<SilingCompany>('settings/kqpro/companies/all');
  }

  callAddSilingCompany(company: SilingCompany): void {
    this.store.dispatch(fromAdminActions.addCompanyStart({ company }));
  }

  addSilingCompany(company: SilingCompany): FirebaseDocObsAndId {
    return this.rs.addDocumentToCollection(company, 'settings/kqpro/companies/all');
  }

  fetchShowHideCompanies(): void {
    this.store.dispatch(fromAdminActions.getShowHideCompaniesStart());
  }

  getShowHideCompanies(): Observable<ShowHideData> {
    return this.rs.getDocument<ShowHideData>('settings/kqpro/showHideList');
  }

}
