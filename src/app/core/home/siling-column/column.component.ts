import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SilingData, SilingDataDetail } from 'src/app/models/general.models';

@Component({
  selector: 'app-core-siling-column',
  templateUrl: 'column.component.html',
  styleUrls: ['./column.component.scss']
})
export class SilingColumnComponent implements OnInit, OnChanges {

  @Input()
  silingCompanyId?: string = undefined;

  @Input()
  silingData: SilingDataDetail[] = [];

  constructor() {

  }

  ngOnChanges() {
  }

  ngOnInit() {

  }
}
