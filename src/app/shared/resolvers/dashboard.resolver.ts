import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { SilingCoreService } from 'src/app/core/core.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardLoadDataFireResolver implements Resolve<any> {
  constructor(private cs: SilingCoreService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return of(true).pipe(
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
