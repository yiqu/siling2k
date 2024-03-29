import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { filter, map } from "rxjs/operators";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { environment } from "src/environments/environment";
import { appMetaDataEffect } from "../meta/meta.effects";
import { AppGlobalRouterEffects } from "../router/router.effects";

@Injectable()
export class AppGlobalEffects {

  constructor(public actions$: Actions, public ts: ToasterService) {
  }

}


export const appEffects = [
  AppGlobalEffects,
  AppGlobalRouterEffects,
  ...appMetaDataEffect
]
