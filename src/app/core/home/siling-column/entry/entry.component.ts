import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { SilingDataDetail } from 'src/app/models/general.models';
import { MenuOption, SilingEntryOption } from 'src/app/shared/models/drop-menu.model';
import { EntryMode } from 'src/app/shared/models/general.model';

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

  @Output()
  menuSelect: EventEmitter<SilingEntryOption> = new EventEmitter<SilingEntryOption>();

  menuOptions: MenuOption[];

  constructor() {
    this.menuOptions = [{
      display: 'Edit',
      id: EntryMode.UPDATE,
      icon: 'edit',
    },
    {
      display: 'Delete',
      id: EntryMode.DELETE,
      icon: 'delete',
    }]
  }

  ngOnChanges() {

  }

  ngOnInit() {

  }

  onMenuOptSelect(opt: MenuOption) {
    this.menuSelect.emit({
      option: opt,
      entry: this.entryDetail
    });
  }
}
