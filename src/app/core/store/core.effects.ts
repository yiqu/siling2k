import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { OnInitEffects } from "@ngrx/effects";
import { tap, concatMap, switchMap, map, mergeMap, catchError, exhaustMap, delay } from 'rxjs/operators';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import * as fromFirebaseUtils from '../../shared/services/firebase.utils';
import { Update } from '@ngrx/entity';
import { of, throwError } from 'rxjs';
import { FirebasePromiseError } from 'src/app/shared/models/firebase.model';
import { Action } from '@ngrx/store';
import * as fromCoreActions from './core.actions';
import { SilingData } from 'src/app/models/general.models';
import { RestService } from 'src/app/shared/services/rest.service';
import { FirebaseOptions } from '@firebase/app';
import { FirebaseDocObsAndId } from './core.state';


@Injectable()
export class SilingDashboardEffects {

  constructor(public actions$: Actions, public ts: ToasterService, public rs: RestService) {
  }

  // ngrxOnInitEffects(): Action {
  //   return fromAdminActions.getComapniesStart();
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
        console.log(entryDataWithId)
        return operation.operationObs.then(
          (result) => {
            this.ts.getSuccess('Entry was successfully saved.');
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



}



export const dashboardEffects = [SilingDashboardEffects];
