import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { OnInitEffects } from "@ngrx/effects";
import { tap, concatMap, switchMap, map, mergeMap, catchError, exhaustMap, delay } from 'rxjs/operators';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { RestService } from 'src/app/shared/services/rest.service';
import * as fromDashboardActions from './dashboard.actions';
import * as fromRouterSelectos from '../../store/router/router.selectors';
import { RouterService } from  '../../shared/services/router-service';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';

@Injectable()
export class SilingDashboardUiEffects {

  constructor(public actions$: Actions, public ts: ToasterService, public rs: RestService,
    public routerService: RouterService) {
  }

  setTabSelection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      concatLatestFrom(() => this.routerService.queryParams$),
      map((tabSelectionAndParam) => {
        const tabIndex: string = (tabSelectionAndParam[1].tabIndex ?? 0) + '';
        return fromDashboardActions.setDashboardTabSelection({ tabIndex });
      })
    );
  }, {dispatch: true});

}



export const dashboardUiEffects = [SilingDashboardUiEffects];
