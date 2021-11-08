import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import { SilingCompany } from 'src/app/admin/store/admin.state';
import { SettingsService } from '../settings.service';
import { ShowHideCompanyList } from '../store/settings.state';
import { NewSilingInsDialogService } from './new-siling-dialog.service';

@Component({
  selector: 'app-settings-core',
  templateUrl: 'core.component.html',
  styleUrls: ['./core.component.scss']
})
export class SettingsCoreComponent implements OnInit {

  constructor(public ss: SettingsService, public as: AdminService, private nsd: NewSilingInsDialogService,
    private tcp: TitleCasePipe) {

  }

  ngOnInit() {
  }

  onShowHideChange(showHideUpdates: ShowHideCompanyList): void {
    this.ss.updateShowHideList(showHideUpdates);
  }

  onAddNewIns() {
    const dialogRef = this.nsd.getDialog(undefined);

    dialogRef.afterClosed().subscribe((res: SilingCompany) => {
      if (res && res.name && res.dateAdded) {
        const company: SilingCompany = {
          dateAdded: new Date(res.dateAdded).getTime(),
          id: '',
          name: res.name ? this.tcp.transform(res.name) : 'Invalid Name',
          hidden: false
        }
        this.ss.addNewSilingCompany(company);
      }
    })
  }
}
