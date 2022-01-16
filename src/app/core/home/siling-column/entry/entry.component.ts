import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { SilingDataDetail } from 'src/app/models/general.models';
import { MenuOption } from 'src/app/shared/models/drop-menu.model';

@Component({
  selector: 'app-core-siling-column-entry',
  templateUrl: 'entry.component.html',
  styleUrls: ['./entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SilingColumnEntryComponent implements OnInit, OnChanges {

  @Input()
  entryDetail?: SilingDataDetail = undefined;

  @Input()
  isLast: boolean = false;

  menuOptions: MenuOption[];

  constructor() {
    this.menuOptions = [{
      display: 'Edit',
      id: 'edit',
      icon: 'edit',
    },
    {
      display: 'Delete',
      id: 'trash',
      icon: 'delete',
    }]
  }


  ngOnChanges() {

  }

  ngOnInit() {

  }

  onMenuOptSelect(opt: MenuOption) {
    console.log(opt)
    console.log(this.entryDetail)
  }
}
