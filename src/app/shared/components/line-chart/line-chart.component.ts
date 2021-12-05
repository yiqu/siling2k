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
import { arraysEqual } from '../../general.utils';
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

  apexSeries?: ApexAxisChartSeries;
  apexXAxis?: ApexXAxis;
  apexChart?: ApexChart;
  apexDataLabels?: ApexDataLabels;
  apexMarkers?: ApexMarkers;
  apexTitle?: ApexTitleSubtitle;
  apexFill?: ApexFill;
  apexYAxis?: ApexYAxis;
  apexTooltip?: ApexTooltip;
  apexLegend?: ApexLegend;
  apexGrid?: ApexGrid;

  constructor() {
  }

  ngOnChanges() {
    this.initChartData();
  }

  ngOnInit() {
  }

  initChartData() {
    if (!this.apexSeries) {
      this.apexSeries = this.chartData?.series;
    } else if (this.apexSeries && this.chartData?.series) {
      if (!arraysEqual(this.apexSeries, this.chartData?.series)) {
        this.apexSeries = this.chartData?.series;
      }
    }
    if (!this.apexXAxis) {
      this.apexXAxis = this.chartData?.xaxis;
    } else if (this.apexXAxis && this.chartData?.xaxis) {
      if (!arraysEqual(this.apexXAxis.categories, this.chartData?.xaxis.categories)) {
        this.apexXAxis = this.chartData?.xaxis;
      }
    }
    if (!this.apexChart) {
      this.apexChart = this.chartData?.chart;
    }
    if (!this.apexDataLabels) {
      this.apexDataLabels = this.chartData?.dataLabels;
    }
    if (!this.apexMarkers) {
      this.apexMarkers = this.chartData?.markers;
    }
    if (!this.apexTitle) {
      this.apexTitle = this.chartData?.title;
    }
    if (!this.apexFill) {
      this.apexFill = this.chartData?.fill;
    }
    if (!this.apexYAxis) {
      this.apexYAxis = this.chartData?.yaxis;
    }
    if (!this.apexTooltip) {
      this.apexTooltip = this.chartData?.tooltip;
    }
    if (!this.apexLegend) {
      this.apexLegend = this.chartData?.legend;
    }
    if (!this.apexGrid) {
      this.apexGrid = this.chartData?.grid;
    }

  }
}
