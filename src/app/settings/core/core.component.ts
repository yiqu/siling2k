import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import { ShowHideCompanyList } from '../store/settings.state';

@Component({
  selector: 'app-settings-core',
  templateUrl: 'core.component.html',
  styleUrls: ['./core.component.scss']
})
export class SettingsCoreComponent implements OnInit {

  constructor(public ss: SettingsService) {

  }

  ngOnInit() {

  }

  onShowHideChange(showHideUpdates: ShowHideCompanyList) {
    this.ss.updateShowHideList(showHideUpdates);
  }
}
