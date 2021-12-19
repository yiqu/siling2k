import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogConfirmComponent } from './confirm-dialog/dialog.component';
import { MaterialModuleBundle } from './material-bundle';
import { PipeBundleModule } from './pipes/pipe-bundle.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PopoverModule } from "ngx-smart-popover";
import { PopoverComponent } from './popover/popover.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { ApexLineChartComponent } from './components/line-chart/line-chart.component';
import { MatIconModule } from '@angular/material/icon';
import { EnterEscapeKeyEventDirective } from './directives/enter-escape.directive.ts/enter-escape.directive';
import { NgxKeyeventModule } from 'ngx-keyevent';

@NgModule({
  declarations: [
    DialogConfirmComponent,
    PopoverComponent,
    ApexLineChartComponent,
    EnterEscapeKeyEventDirective,
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleBundle,
    PipeBundleModule,
    FlexLayoutModule,
    PopoverModule,
    NgApexchartsModule,
    MatIconModule,
    NgxKeyeventModule
  ],

  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModuleBundle,
    PipeBundleModule,
    PopoverModule,
    PopoverComponent,
    ApexLineChartComponent,
    DialogConfirmComponent,
    EnterEscapeKeyEventDirective,
    NgxKeyeventModule
  ],

  providers: [
  ],
})
export class SharedBudleModule { }
