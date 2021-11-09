import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { SilingCompany } from 'src/app/admin/store/admin.state';
import { SilingCoreService } from 'src/app/core/core.service';
import { SettingsService } from 'src/app/settings/settings.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardLoadDataFireResolver implements Resolve<any> {
  constructor(private cs: SilingCoreService, private ss: SettingsService) {}

  private getCompaniesBeingDisplayed$ = forkJoin({
    allCompanies: this.cs.fetchSilingCompanies(),
    showHideList: this.cs.fetchShowHideList()
  })

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.getCompaniesBeingDisplayed$.pipe(
      take(1),
      tap((res) => {
        const allCompanies: SilingCompany[] = res.allCompanies;
        const comapnyToShow: SilingCompany[] = [];
        let companiesHidden: SilingCompany[] = [];
        let companiesShown: SilingCompany[] = [];

        if (res.showHideList && res.showHideList.hiding && res.showHideList.hiding.length > -1) {
          companiesHidden = res.showHideList.hiding;
        }

        if (res.showHideList && res.showHideList.showing && res.showHideList.showing.length > -1) {
          companiesShown = res.showHideList.showing;
        }

        allCompanies.forEach((res: SilingCompany) => {
          const excludeIndex: number = companiesHidden.findIndex((co) => {
            return co.name === res.name;
          });
          if (excludeIndex < 0) {
            comapnyToShow.push(res);
          }
        });

        comapnyToShow.sort((x: SilingCompany, y: SilingCompany) => {
          const xIndex = companiesShown.findIndex((co) => {
            return co.id === x.id;
          });
          const yIndex = companiesShown.findIndex((co) => {
            return co.id === y.id;
          });

          return xIndex > yIndex ? 1 : -1;
        });

        const companiesToShowIds = comapnyToShow.map((showCo) => {
          return showCo.name.toLowerCase();
        });

        this.cs.getSilingDataByInsName(companiesToShowIds);
      })
    );
  }
}
