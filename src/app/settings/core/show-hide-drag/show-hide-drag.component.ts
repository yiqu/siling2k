import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { SilingCompany } from 'src/app/admin/store/admin.state';
import { AppState } from 'src/app/store/global/app.reducer';
import { SettingsService } from '../../settings.service';
import { ShowHideCompanyList } from '../../store/settings.state';

@Component({
  selector: 'app-settings-core-show-hide',
  templateUrl: 'show-hide-drag.component.html',
  styleUrls: ['./show-hide-drag.component.scss']
})
export class ShowHideComponent implements OnInit, OnChanges {

  @Input()
  showHideData: ShowHideCompanyList;

  @Output()
  onShowHideChange: EventEmitter<ShowHideCompanyList> = new EventEmitter<ShowHideCompanyList>();

  showList: SilingCompany[] = [];
  hideList: SilingCompany[] = [];

  constructor() {
    this.showHideData = {
      hiding: [],
      showing: []
    };
  }

  ngOnChanges() {
    if (this.showHideData) {
      this.showList = this.showHideData.showing;
      this.hideList = this.showHideData.hiding;
    }
    console.log(this.showHideData)
  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<SilingCompany[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex);
    }

    console.log(this.showList, this.hideList)
    this.onShowHideChange.emit({
      hiding: this.hideList,
      showing: this.showList
    });
  }


}
