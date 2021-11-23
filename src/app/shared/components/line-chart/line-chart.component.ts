import { Component, Input, OnChanges, OnInit } from '@angular/core';
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
  styleUrls: ['./line-chart.component.scss']
})
export class ApexLineChartComponent implements OnInit, OnChanges {

  @Input()
  chartData: ApexChartData | undefined | null = undefined;

  constructor() {
  }

  ngOnChanges() {
    this.initChartData();
  }

  ngOnInit() {

  }

  initChartData() {
  }
}
