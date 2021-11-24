import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { ROUTER_NAVIGATION } from "@ngrx/router-store";
import { filter, map, switchMap, tap } from "rxjs/operators";
import { RouterService } from "src/app/shared/services/router-service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { environment } from "src/environments/environment";

@Injectable()
export class AppGlobalRouterEffects {

  constructor(public actions$: Actions, public ts: ToasterService, private rs: RouterService) {
  }

  routeParams$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      concatLatestFrom(() => this.rs.routeParams$),
      tap((res) => {
        console.log("route params", res[1])
      })
    );
  }, {dispatch: false});

  currentRoute$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      concatLatestFrom(() => this.rs.currentRoute$),
      tap((res) => {
        console.log("current route", res[1])
      })
    );
  }, {dispatch: false});

  queryParams$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      concatLatestFrom(() => this.rs.queryParams$),
      tap((res) => {
        console.log("query params", res[1])
      })
    );
  }, {dispatch: false});

  routeData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      concatLatestFrom(() => this.rs.routeData$),
      tap((res) => {
        console.log("route data", res[1])
      })
    );
  }, {dispatch: false});

  nestedRouteData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      concatLatestFrom(() => this.rs.nestedRouteParams$),
      tap((res) => {
        console.log("nested route data", res[1])
      })
    );
  }, {dispatch: false});
}

