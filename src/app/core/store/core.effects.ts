import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { OnInitEffects } from "@ngrx/effects";
import { tap, concatMap, switchMap, map, mergeMap, catchError, exhaustMap, delay } from 'rxjs/operators';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import * as fromFirebaseUtils from '../../shared/services/firebase.utils';
import { Update } from '@ngrx/entity';
import { EMPTY, forkJoin, Observable, of, throwError } from 'rxjs';
import { FirebasePromiseError } from 'src/app/shared/models/firebase.model';
import { Action } from '@ngrx/store';
import * as fromCoreActions from './core.actions';
import { SilingData } from 'src/app/models/general.models';
import { RestService } from 'src/app/shared/services/rest.service';
import { FirebaseOptions } from '@firebase/app';
import { FirebaseDocObsAndId, SilingDataCollection } from './core.state';
import { QueryDocumentSnapshot, DocumentData } from '@firebase/firestore';
import { SilingCoreService } from '../core.service';
import { SilingCompany } from 'src/app/admin/store/admin.state';
import { ZorroToasterService } from 'src/app/shared/services/toaster-zorro.service';


@Injectable()
export class SilingDashboardEffects {

  constructor(public actions$: Actions, public ts: ToasterService, public rs: RestService,
    public cs: SilingCoreService, private zs: ZorroToasterService) {
  }

  // ngrxOnInitEffects(): Action {
  //   return fromCoreActions
  // }

  saveSilingEntry$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCoreActions.saveSilingEntryStart),
      mergeMap((res) => {
        const entryData: SilingData = res.payload;
        const operation: FirebaseDocObsAndId = this.rs.addEntryToCollection(entryData);
        const entryDataWithId = {
          ...entryData,
          id: operation.id
        }
        return operation.operationObs.then(
          (result) => {
            this.ts.getSuccess('Entry added successfully.');
            return fromCoreActions.saveSilingEntrySuccess({payload: entryDataWithId, date: new Date().getTime()});
          }
        ).catch(
          (err) => {
            return fromCoreActions.saveSilingEntryFailure({errMsg: err});
          }
        )
      })
    );
  });

  // updateSilingEntry$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(fromCoreActions.updateSilingEntryStart),
  //     concatMap((res) => {
  //       console.log(res.toUpdate)
  //       const company = res.toUpdate.company;
  //       const entryId = res.toUpdate.id;
  //       if (entryId) {

  //       }
  //       return EMPTY;
  //     })
  //   );
  // });

  /**
   * Updat the siling data being fetched name list, and dispatch call to get all siling data
   */
  getSilingToShowIds$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCoreActions.updateSilingToShowIdsStart),
      switchMap((res) => {
        const msgId: string | null = this.zs.openLoadingToast('Fetching Siling data.')
        return this.cs.getSilingShownIdsObs().pipe(
          map((idsToShow: string[]) => {
            return fromCoreActions.getSilingDataByNameStart({names: idsToShow, toastId: msgId});
          }),
          catchError((err) => {
            return of(fromCoreActions.updateSilingToShowIdsFailure({ errMsg: err }));
          })
        )
      })
    );
  });

  /**
   * Get siling data from a list of company names
   *
   * forkJoin()
   */
  getSilingDataByNames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCoreActions.getSilingDataByNameStart),
      switchMap((res) => {
        const silingDataNames: string[] = res.names;
        const forkObs: {[key: string] : Observable<SilingData[]>} = {};
        const toastMsgId: string | null | undefined = res.toastId;

        silingDataNames.forEach((res) => {
          forkObs[res] = this.rs.getDataByCollectionName(res);
        });
        return forkJoin(forkObs).pipe(
          map((allData: SilingDataCollection) => {
            this.ts.getSnackbar('Fetched data successfully.');
            return fromCoreActions.getSilingDataByNameSuccess({payload: allData,
              date: new Date().getTime(), toastId: toastMsgId});
          }),
          catchError((res) => {
            return of(fromCoreActions.getSilingDataByNameFailure({errMsg: res}));
          })
        )
      })
    );
  });

  refreshData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCoreActions.refreshData),
      concatLatestFrom(() => this.cs.companiesShown$),
      map((res) => {
        const companiesShown: string[] = res[1];
        return fromCoreActions.getSilingDataByNameStart({ names: companiesShown });
      })
    );
  });

  crudActionSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(...[fromCoreActions.getSilingDataByNameSuccess]),
      tap((res) => {
        this.removeToastById(res.toastId);
      })
    );
  }, {dispatch: false});

  private removeToastById(id: string | null | undefined) {
    if (id) {
      this.zs.removeMessagebyId(id);
    }
  }
}



export const dashboardEffects = [SilingDashboardEffects];
