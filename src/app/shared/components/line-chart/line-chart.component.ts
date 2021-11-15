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

@Component({
  selector: 'app-shared-line-chart',
  templateUrl: 'line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class ApexLineChartComponent implements OnInit, OnChanges {


  @Input()
  chartData: any = undefined;

  public series?: ApexAxisChartSeries;
  public chart?: ApexChart;
  public dataLabels?: ApexDataLabels;
  public markers?: ApexMarkers;
  public title?: ApexTitleSubtitle;
  public fill?: ApexFill;
  public yaxis?: ApexYAxis;
  public xaxis?: ApexXAxis;
  public tooltip?: ApexTooltip;
  public legend?: ApexLegend;
  public grid?: ApexGrid;

  constructor() {

  }

  ngOnChanges() {
    console.log("creating")
    this.initChartData();
  }

  ngOnInit() {

  }


  initChartData() {
    this.createChartOptions();
  }

  createChartOptions() {
    let ts2 = 1484418600000;
    let dates = [];
    let dates2 = [];
    for (let i = 0; i < 120; i++) {
      ts2 = ts2 + 86400000;
      dates.push([ts2, i]);
      dates2.push([ts2, i+10])
    }
    this.series = [
      {
        name: "XYZ MOTORS",
        data: dates as any
      },
      {
        name: "XYZ MOTORS2",
        data: dates2 as any
      }
    ];
    this.chart = {
      type: "area",
      stacked: true,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: "zoom"
      },
      width: '100%'
    };
    this.dataLabels = {
      enabled: false
    };
    this.markers = {
      size: 0
    };
    this.title = {
      text: "Stock Price Movement",
      align: "left"
    };
    this.fill = {
      type: "gradient",
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8
      }
    };
    this.yaxis = {
      labels: {
        formatter: function(val) {
          return (val ).toFixed(0);
        }
      },
      title: {
        text: "Price"
      }
    };
    this.xaxis = {
      type: "datetime"
    };
    this.tooltip = {
      shared: true,
      y: {
        formatter: function(val) {
          return (val ).toFixed(0);
        }
      }
    };
    this.legend = {
      show: true,
      position: 'top',
      horizontalAlign: 'center',
      fontFamily: 'Roboto',
      fontSize: '15px',
    };
    this.grid = {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    }
  }
}
