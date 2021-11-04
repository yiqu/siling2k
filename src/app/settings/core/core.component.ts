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

  constructor(public ss: SettingsService, private as: AdminService, private nsd: NewSilingInsDialogService) {

  }

  ngOnInit() {
    this.ss.getShowHideList();
  }

  onShowHideChange(showHideUpdates: ShowHideCompanyList): void {
    this.ss.updateShowHideList(showHideUpdates);
  }

  onAddNewIns() {
    const dialogRef = this.nsd.getDialog(undefined);

    dialogRef.afterClosed().subscribe((res: SilingCompany) => {
      if (res && res.name && res.dateAdded) {
        console.log(res)
        //this.cs.saveSilingEntry(dataToSave);
      }
    })
  }
}
