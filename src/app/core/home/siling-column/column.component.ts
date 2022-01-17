import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { SilingData, SilingDataDetail } from 'src/app/models/general.models';
import { SilingEntryOption } from 'src/app/shared/models/drop-menu.model';

@Component({
  selector: 'app-core-siling-column',
  templateUrl: 'column.component.html',
  styleUrls: ['./column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SilingColumnComponent implements OnInit, OnChanges {

  @Input()
  silingCompanyId?: string = undefined;

  @Input()
  silingData: SilingDataDetail[] = [];

  @Output()
  menuSelect: EventEmitter<SilingEntryOption> = new EventEmitter<SilingEntryOption>();

  constructor() {

  }

  ngOnChanges() {
  }

  ngOnInit() {

  }

  onMenuSelection(selectionData: SilingEntryOption) {
    this.menuSelect.emit(selectionData);
  }
}
