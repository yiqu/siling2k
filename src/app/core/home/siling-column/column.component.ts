import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SilingData } from 'src/app/models/general.models';

@Component({
  selector: 'app-core-siling-column',
  templateUrl: 'column.component.html',
  styleUrls: ['./column.component.scss']
})
export class SilingColumnComponent implements OnInit, OnChanges {

  @Input()
  silingCompanyId?: string = undefined;

  @Input()
  silingData: SilingData[] = [];

  constructor() {

  }

  ngOnChanges() {
  }

  ngOnInit() {

  }
}
