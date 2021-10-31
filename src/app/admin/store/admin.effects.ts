
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
import * as fromAdminActions from './admin.actions';
import { SilingCompany } from './admin.state';
import { environment } from 'src/environments/environment';


const mockCompanies: SilingCompany[] = environment.defaultSilingInsToLoad;


@Injectable()
export class AdminEffects implements OnInitEffects {

  constructor(public actions$: Actions, public ts: ToasterService) {
  }

  ngrxOnInitEffects(): Action {
    return fromAdminActions.getComapniesStart();
  }


  getSilingCompanies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAdminActions.getComapniesStart),
      switchMap(() => {
        return of(mockCompanies).pipe(
          map((res: SilingCompany[]) => {
            return fromAdminActions.getComapniesSuccess({companies: res, date: new Date().getTime()});
          }),
          catchError((err) => {
            return of(fromAdminActions.getComapniesFailure({errMsg: err}));
          })
        )
      })
    );
  });


}



export const adminEffects = [AdminEffects];
