import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SilingCompany } from './store/admin.state';
import * as fromAdminSelectors from './store/admin.selectors';
import { AppState } from '../store/global/app.reducer';
import * as fromAdminActions from './store/admin.actions';
import { RestService } from '../shared/services/rest.service';
import { FirebaseDocObsAndId } from '../core/store/core.state';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  getSilingCompanies$: Observable<SilingCompany[]> = this.store.select(fromAdminSelectors.getSilingCompanies);
  getSilingCompanyLoading$: Observable<boolean> = this.store.select(fromAdminSelectors.getSilingCompaniesLoading);

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

}
