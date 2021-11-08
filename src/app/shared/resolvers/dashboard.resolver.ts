import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { SilingCoreService } from 'src/app/core/core.service';
import { SettingsService } from 'src/app/settings/settings.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardLoadDataFireResolver implements Resolve<any> {
  constructor(private cs: SilingCoreService, private ss: SettingsService) {}

  // need to call both show hide list, and all company list

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.ss.showHideList$.pipe(
      take(1),
      tap((res) => {
        console.log("resolver for comapany list", res);
        const companyIds = environment.defaultSilingInsToLoad.map(
          (res) => {
            return res.id;
          }
        )
        this.cs.getSilingDataByInsName(companyIds);
      })
    );
  }
}


/**
 * Resolver based on route params
 */
// @Injectable()
// export class APIResolver implements Resolve<any> {
//   constructor(private apiService: APIService) {}

//   resolve(route: ActivatedRouteSnapshot) {
//     return this.apiService.getItems(route.params.date);
//   }
// }
