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

  silingCompanies: SilingCompany[] = [];
  compDest$: Subject<void> = new Subject<void>();

  constructor(private neds: NewEntryDialogService, public as: AdminService) {
  }

  ngOnInit() {
    this.as.getSilingCompanies$.pipe(
      takeUntil(this.compDest$)
    ).subscribe((res) => {
      this.silingCompanies = [...res];
    })
  }

  onNewEntryClick() {
    const newEntryInfo: SilingEntry = {
      amount: undefined,
      company: undefined,
      companyOptions: this.silingCompanies,
      date: new Date().getTime()
    }
    this.neds.openDialog(newEntryInfo);
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
