import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SilingCompany } from './store/admin.state';
import * as fromAdminSelectors from './store/admin.selectors';
import { AppState } from '../store/global/app.reducer';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  getSilingCompanies$: Observable<SilingCompany[]> = this.store.select(fromAdminSelectors.getSilingCompanies)

  constructor(private store: Store<AppState>) {

  }

}
