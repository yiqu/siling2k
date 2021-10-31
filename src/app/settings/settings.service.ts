import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/global/app.reducer';
import { ShowHideCompanyList, ShowHideList } from './store/settings.state';
import * as fromSettingsActions from './store/settings.actions';
import { Observable } from 'rxjs';
import * as fromSettingsSelectors from './store/settings.selectors';
import { RestService } from '../shared/services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  showHideList$: Observable<ShowHideCompanyList> = this.store.select(fromSettingsSelectors.getShowHideList);

  constructor(private store: Store<AppState>, private rs: RestService) {
  }

  updateShowHideList(showHide: ShowHideCompanyList): void {
    this.store.dispatch(fromSettingsActions.showHideListUpdateStart({showHideData: showHide}));
  }

  saveShowHideList(listData: ShowHideCompanyList): Promise<void> {
    return this.rs.createDocument<ShowHideCompanyList>(listData, 'settings/kqpro/showHideList');
  }

}
