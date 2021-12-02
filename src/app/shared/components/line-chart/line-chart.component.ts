import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip, ApexLegend, ApexGrid
} from "ng-apexcharts";
import { ApexChartData } from './line-chart.model';

@Component({
  selector: 'app-shared-line-chart',
  templateUrl: 'line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApexLineChartComponent implements OnInit, OnChanges {

  @Input()
  chartData: ApexChartData | undefined | null = undefined;

  @ViewChild('chart')
  chart?: ApexChart;

  constructor() {
  }

  ngOnChanges() {
    this.initChartData();
    console.log('new chart data');
  }

  ngOnInit() {

  }

  initChartData() {
  }
}
