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
import * as fromCoreActions from './core.actions';
import { SilingData } from 'src/app/models/general.models';
import { RestService } from 'src/app/shared/services/rest.service';
import { FirebaseOptions } from '@firebase/app';
import { FirebaseDocObsAndId, SilingDataCollection } from './core.state';
import { QueryDocumentSnapshot, DocumentData } from '@firebase/firestore';


@Injectable()
export class SilingDashboardEffects {

  constructor(public actions$: Actions, public ts: ToasterService, public rs: RestService) {
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
        silingDataNames.forEach((res) => {
          forkObs[res] = this.rs.getDataByCollectionName(res);
        });
        return forkJoin(forkObs).pipe(
          map((allData: SilingDataCollection) => {
            this.ts.getSuccess('Loaded Siling data successfully.');
            return fromCoreActions.getSilingDataByNameSuccess({payload: allData, date: new Date().getTime()});
          }),
          catchError((res) => {
            return of(fromCoreActions.getSilingDataByNameFailure({errMsg: res}));
          })
        )
      })
    );
  });



}



export const dashboardEffects = [SilingDashboardEffects];
