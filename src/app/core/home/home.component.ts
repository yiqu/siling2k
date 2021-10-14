import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AdminService } from 'src/app/admin/admin.service';
import { SilingCompany } from 'src/app/admin/store/admin.state';
import { SilingEntry } from 'src/app/models/general.models';
import { NewEntryDialogService } from '../new-entry-dialog/new-entry-dialog.service';

@Component({
  selector: 'app-core-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {

  compDest$: Subject<void> = new Subject<void>();

  constructor(private neds: NewEntryDialogService, public as: AdminService) {
  }

  ngOnInit() {
  }

  onNewEntryClick() {
    this.as.fetchSilingCompanies();
    const newEntryInfo: SilingEntry = {
      amount: undefined,
      company: undefined,
      companies: this.as.getSilingCompanies$,
      companyLoading: this.as.getSilingCompanyLoading$,
      date: new Date().getTime()
    };

    const dialogRef = this.neds.getDialog(newEntryInfo);
    dialogRef.afterClosed().subscribe((res) => {
      console.log('closed', res)
    })
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
