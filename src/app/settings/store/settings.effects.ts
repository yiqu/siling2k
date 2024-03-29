import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { OnInitEffects } from "@ngrx/effects";
import { tap, concatMap, switchMap, map, mergeMap, catchError, exhaustMap, delay } from 'rxjs/operators';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import * as fromFirebaseUtils from '../../shared/services/firebase.utils';
import { Update } from '@ngrx/entity';
import { forkJoin, Observable, of, throwError } from 'rxjs';
import { FirebasePromiseError } from 'src/app/shared/models/firebase.model';
import { Action } from '@ngrx/store';
import { SilingData } from 'src/app/models/general.models';
import { RestService } from 'src/app/shared/services/rest.service';
import { FirebaseOptions } from '@firebase/app';
import { QueryDocumentSnapshot, DocumentData } from '@firebase/firestore';
import { SettingsService } from '../settings.service';
import * as fromSettingsActions from './settings.actions';
import { ShowHideCompanyList } from './settings.state';
import * as fromCoreActions from '../../core/store/core.actions';


@Injectable()
export class SilingSettingsEffects {

  constructor(public actions$: Actions, public ts: ToasterService, public ss: SettingsService) {
  }

  ngrxOnInitEffects(): Action {
    return fromSettingsActions.getShowHideListStart();
  }

  updateShowHideList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromSettingsActions.showHideListUpdateStart),
      concatMap((res) => {
        const list: ShowHideCompanyList = res.showHideData;
        return this.ss.saveShowHideList(list).then(
          (res) => {
            return fromSettingsActions.showHideListUpdateSuccess({showHideData: list,
              successMsg: 'Updated Show/Hide list successfully.'});
          }
        ).catch(
          (err) => {
            return fromSettingsActions.showHideListUpdateFailure({errMsg: err});
          }
        )
      })
    );
  });

  getShowHideList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromSettingsActions.getShowHideListStart),
      switchMap((res) => {
        return this.ss.fetchShowHideList<ShowHideCompanyList>().pipe(
          map((list: ShowHideCompanyList) => {
            return fromSettingsActions.getShowHideListSuccess({ payload: list,
              successMsg: 'Fetched Show/Hide list successfully.' });
          }),
          catchError((err) => {
            return of(fromSettingsActions.getShowHideListFailure({ errMsg: err }));
          })
        )
      })
    );
  });

  refreshSilingDashboard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromSettingsActions.showHideListUpdateSuccess),
      map(() => {
        return fromCoreActions.updateSilingToShowIdsStart();
      })
    );
  });

  successOperationToast$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(...[fromSettingsActions.getShowHideListSuccess,
        fromSettingsActions.showHideListUpdateSuccess]),
      tap((data) => {
        const msg = data.successMsg ?? 'Operation success.';
        this.ts.getSuccess(msg);
      })
    );
  }, {dispatch: false});


}

export const settingsEffects = [SilingSettingsEffects];
