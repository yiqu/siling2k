import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RouterService } from 'src/app/shared/services/router-service';

@Component({
  selector: 'app-admin-configs-company-details',
  templateUrl: 'company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit, OnDestroy {

  companyId?: string;
  compDest$ = new Subject<void>();

  constructor(public rs: RouterService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.rs.routeParams$.pipe(
      takeUntil(this.compDest$)
    )
    .subscribe((res) => {
      this.companyId = res.companyId;
    });
  }

  onEdit() {
    this.router.navigate(['./', 'edit'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
