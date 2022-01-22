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
import { ZorroModuleBundle } from './zorro-bundle.module';
import { SharedDropMenuComponent } from './components/drop-menu/drop-menu.component';
import { LoadingBarCssComponent } from './components/loading-bar-css/loading-bar-css.component';

@NgModule({
  declarations: [
    DialogConfirmComponent,
    PopoverComponent,
    ApexLineChartComponent,
    EnterEscapeKeyEventDirective,
    SharedDropMenuComponent,
    LoadingBarCssComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleBundle,
    ZorroModuleBundle,
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
    ZorroModuleBundle,
    PipeBundleModule,
    PopoverModule,
    PopoverComponent,
    ApexLineChartComponent,
    DialogConfirmComponent,
    EnterEscapeKeyEventDirective,
    NgxKeyeventModule,
    SharedDropMenuComponent,
    LoadingBarCssComponent,
  ],

  providers: [
  ],
})
export class SharedBudleModule { }
