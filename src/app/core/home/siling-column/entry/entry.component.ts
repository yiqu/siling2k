import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SilingDataDetail } from 'src/app/models/general.models';

@Component({
  selector: 'app-core-siling-column-entry',
  templateUrl: 'entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class SilingColumnEntryComponent implements OnInit, OnChanges {

  @Input()
  entryDetail?: SilingDataDetail = undefined;

  constructor() {
  }


  ngOnChanges() {

  }

  ngOnInit() {

  }
}
