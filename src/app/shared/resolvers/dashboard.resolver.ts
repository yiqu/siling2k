import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, iif, Observable, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { SilingCompany } from 'src/app/admin/store/admin.state';
import { SilingCoreService } from 'src/app/core/core.service';
import { SilingDataCollection } from 'src/app/core/store/core.state';
import { SettingsService } from 'src/app/settings/settings.service';
import { environment } from 'src/environments/environment';
import { ToasterService } from '../services/toaster.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardLoadDataFireResolver implements Resolve<any> {
  constructor(private cs: SilingCoreService, private ss: SettingsService, private ts: ToasterService) {}

  private getCompaniesBeingDisplayedIds$ = this.cs.getSilingShownIdsObs().pipe(
    tap((res: string[]) => {
      this.cs.getSilingDataByInsName(res);
    })
  );

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    console.log('Running resolver...');
    return this.cs.silingData$.pipe(
      take(1),
      map((res: SilingDataCollection) => {
        if (Object.keys(res).length > 0) {
          console.log('Using existing data.')
          return res;
        }
        console.log('Fetching data.')
        return undefined;
      }),
      switchMap((data?: SilingDataCollection) => {
        return iif(
          () => !!data,
          of(data),
          this.getCompaniesBeingDisplayedIds$
        )
      })
    )
  }
}
