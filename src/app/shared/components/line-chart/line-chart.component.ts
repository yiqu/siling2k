import { Component, OnChanges, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip
} from "ng-apexcharts";

@Component({
  selector: 'app-shared-line-chart',
  templateUrl: 'line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class ApexLineChartComponent implements OnInit, OnChanges {

  public series?: ApexAxisChartSeries;
  public chart?: ApexChart;
  public dataLabels?: ApexDataLabels;
  public markers?: ApexMarkers;
  public title?: ApexTitleSubtitle;
  public fill?: ApexFill;
  public yaxis?: ApexYAxis;
  public xaxis?: ApexXAxis;
  public tooltip?: ApexTooltip;

  constructor() { }

  ngOnChanges() {

  }

  ngOnInit() { }
}
