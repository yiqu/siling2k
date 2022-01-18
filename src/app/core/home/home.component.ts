import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AdminService } from 'src/app/admin/admin.service';
import { SilingCompany } from 'src/app/admin/store/admin.state';
import { SilingData, SilingEntry, SilingEntryDialogData } from 'src/app/models/general.models';
import { convertCommaDecimalNumberToNumber } from 'src/app/shared/general.utils';
import { SilingEntryOption } from 'src/app/shared/models/drop-menu.model';
import { EntryMode } from 'src/app/shared/models/general.model';
import { RestService } from 'src/app/shared/services/rest.service';
import { environment } from 'src/environments/environment';
import { SilingCoreService } from '../core.service';
import { FilterDialogService } from './filter-dialog/filter-dialog.service';
import { FilterDialogInput } from './filter-dialog/filter.model';
import { NewEntryDialogService } from './new-entry-dialog/new-entry-dialog.service';

export const FILTER_OPTIONS = ['company', 'date', 'gain', 'loss', 'balance']

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
    private router: Router, private route: ActivatedRoute, private fds: FilterDialogService) {
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

    dialogRef.afterClosed().pipe(
      takeUntil(this.compDest$)
    ).subscribe((res: SilingEntryDialogData) => {
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
    });
  }

  onTabChange(tabChange: MatTabChangeEvent) {
    const position: number | null = tabChange.index ?? 0;
    this.router.navigate(['./'], {queryParams: {tabIndex: position}});
  }

  onRefresh() {
    this.cs.getSilingShowList();
  }

  onOpenFilters() {
    const inputData: FilterDialogInput = {
      companiesLoading: this.as.getSilingCompanyLoading$,
      silingDataLoading: this.cs.isDataLoading$,
      options: FILTER_OPTIONS,
      filterData: []
    }

    const dialogRef = this.fds.getDialog(inputData);

    dialogRef.afterClosed().pipe(
      takeUntil(this.compDest$)
    ).subscribe((res: any) => {
      console.log(res);
    });
  }

  onMenuSelected(menuSelectionData: SilingEntryOption) {
    let initSilingData: SilingEntry | undefined = {
      companies: this.as.getSilingCompanies$,
      companyLoading: this.as.getSilingCompanyLoading$,
    };
    let silingData: SilingEntry | undefined;
    let mode: EntryMode | undefined;

    if (menuSelectionData.option.id === EntryMode.UPDATE) {
      mode = EntryMode.UPDATE;
      silingData = {
        ...initSilingData,
        amount: menuSelectionData.entry?.amount,
        company: menuSelectionData.entry?.company,
        date: menuSelectionData.entry?.date ?? new Date().getTime(),
        id: menuSelectionData.entry?.id
      }
    } else if (menuSelectionData.option.id === EntryMode.DELETE) {
      mode = EntryMode.DELETE;
    }

    if (silingData && mode) {
      this.upsertSilingEntry(mode, silingData);
    }
  }

  upsertSilingEntry(mode: EntryMode, data: SilingEntry) {
    let dialogRef;
    if (mode === EntryMode.CREATE) {

    } else if (mode === EntryMode.UPDATE) {
      dialogRef = this.neds.getDialog(data);
    }

    dialogRef?.afterClosed().pipe(
      takeUntil(this.compDest$)
    ).subscribe((res: SilingEntryDialogData) => {
      if (res && res.amount && res.company && res.date) {
        const amountInt: number = convertCommaDecimalNumberToNumber(res.amount);
        const dataToSave: SilingData = {
          amount: amountInt,
          company: res.company.name.toLowerCase(),
          date: res.date.getTime(),
          id: data.id
        }

        if (mode === EntryMode.CREATE) {
          this.cs.saveSilingEntry(dataToSave);
        } else if (mode === EntryMode.UPDATE) {
          this.cs.updateSilingData(dataToSave);
        }
      }
    });
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
