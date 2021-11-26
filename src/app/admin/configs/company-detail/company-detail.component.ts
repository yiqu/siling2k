import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RouterService } from 'src/app/shared/services/router-service';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-admin-configs-company-details',
  templateUrl: 'company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit, OnDestroy {

  companyId?: string;
  compDest$ = new Subject<void>();
  actionList: string[] = [];

  constructor(public rs: RouterService, private router: Router, private route: ActivatedRoute,
    public as: AdminService) { }

  ngOnInit() {
    this.actionList.push('Edit', 'Configure', 'Delete')
  }

  onActionClick(actionID: string) {
    this.router.navigate(['./', actionID], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
