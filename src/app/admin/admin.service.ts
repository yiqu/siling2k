import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SilingCompany } from './store/admin.state';
import * as fromAdminSelectors from './store/admin.selectors';
import { AppState } from '../store/global/app.reducer';
import * as fromAdminActions from './store/admin.actions';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  getSilingCompanies$: Observable<SilingCompany[]> = this.store.select(fromAdminSelectors.getSilingCompanies);
  getSilingCompanyLoading$: Observable<boolean> = this.store.select(fromAdminSelectors.getSilingCompaniesLoading);

  constructor(private store: Store<AppState>) {

  }

  fetchSilingCompanies() {
    this.store.dispatch(fromAdminActions.getComapniesStart());
  }

}
