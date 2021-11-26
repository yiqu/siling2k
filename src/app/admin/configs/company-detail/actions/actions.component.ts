import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AdminService } from 'src/app/admin/admin.service';
import { ActionForCompany, SilingCompany } from 'src/app/admin/store/admin.state';

@Component({
  selector: 'app-admin-configs-company-detail-edit',
  templateUrl: 'actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class CompanyDetailActionsComponent implements OnInit, OnDestroy {

  compDest$: Subject<void> = new Subject<void>();
  currentCo?: SilingCompany;
  actionId?: string;

  constructor(public as: AdminService) {

  }

  ngOnInit() {
    this.as.companySelectedAndAction$.subscribe(
      (res: ActionForCompany) => {
        this.currentCo = res.company;
        this.actionId = res.actionId;
      }
    )
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }

}
