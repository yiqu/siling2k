import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SummaryData } from '../../store/core.state';

@Component({
  selector: 'app-core-summary',
  templateUrl: 'summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class CoreSummaryComponent implements OnInit {

  @Input()
  summaryData?: SummaryData | null = undefined;

  @Input()
  loading$?: Observable<boolean>;

  constructor() {

  }

  ngOnInit() {

  }
}
