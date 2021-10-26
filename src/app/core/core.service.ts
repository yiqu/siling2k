import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SilingData } from '../models/general.models';
import { AppState } from '../store/global/app.reducer';
import * as fromCoreActions from './store/core.actions';
import * as fromCoreSelectors from './store/core.selectors';

@Injectable({
  providedIn: 'root'
})
export class SilingCoreService {

  public isEntrySaveLoading$: Observable<boolean> = this.store.select(fromCoreSelectors.getSaveIsLoading);

  constructor(private store: Store<AppState>) {

  }

  public saveSilingEntry(entry: SilingData): void {
    this.store.dispatch(fromCoreActions.saveSilingEntryStart({payload: entry}));
  }

  public getSilingDataByInsName(names: string[]) {
    if (names && names.length > 0) {
      this.store.dispatch(fromCoreActions.getSilingDataByNameStart({names: names}));
    }
  }

}
