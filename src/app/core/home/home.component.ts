import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AdminService } from 'src/app/admin/admin.service';
import { SilingCompany } from 'src/app/admin/store/admin.state';
import { SilingData, SilingEntry, SilingEntryDialogData } from 'src/app/models/general.models';
import { convertCommaDecimalNumberToNumber } from 'src/app/shared/general.utils';
import { RestService } from 'src/app/shared/services/rest.service';
import { environment } from 'src/environments/environment';
import { SilingCoreService } from '../core.service';
import { NewEntryDialogService } from './new-entry-dialog/new-entry-dialog.service';

@Component({
  selector: 'app-core-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('tabGroup')
  viewTabGroup?: MatTabGroup;

  showGraph = environment.showGraph;
  compDest$: Subject<void> = new Subject<void>();

  constructor(private neds: NewEntryDialogService, public as: AdminService, public cs: SilingCoreService,
    private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
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
      if (res && res.amount && res.company && res.date) {
        const amountInt: number = convertCommaDecimalNumberToNumber(res.amount);
        const dataToSave: SilingData = {
          amount: amountInt,
          company: res.company.name.toLowerCase(),
          date: res.date.getTime(),
          id: undefined
        }
        this.cs.saveSilingEntry(dataToSave);
      }
    })
  }

  onTabChange(tabChange: MatTabChangeEvent) {
    const position: number | null = tabChange.index ?? 0;
    this.router.navigate(['./'], {queryParams: {tabIndex: position}});
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
