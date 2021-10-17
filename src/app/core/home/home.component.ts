import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AdminService } from 'src/app/admin/admin.service';
import { SilingCompany } from 'src/app/admin/store/admin.state';
import { SilingData, SilingEntry, SilingEntryDialogData } from 'src/app/models/general.models';
import { RestService } from 'src/app/shared/services/rest.service';
import { SilingCoreService } from '../core.service';
import { NewEntryDialogService } from '../new-entry-dialog/new-entry-dialog.service';

@Component({
  selector: 'app-core-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {

  compDest$: Subject<void> = new Subject<void>();

  constructor(private neds: NewEntryDialogService, public as: AdminService, private cs: SilingCoreService) {
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

    dialogRef.afterClosed().subscribe((res: SilingEntryDialogData) => {
      console.log('closed', res);
      if (res && res.amount && res.company && res.date) {
        const dataToSave: SilingData = {
          amount: res.amount,
          company: res.company.id,
          date: res.date.getTime(),
          id: undefined
        }
        this.cs.saveSilingEntry(dataToSave);
      }
    })
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
