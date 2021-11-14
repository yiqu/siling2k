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

@NgModule({
  declarations: [
    DialogConfirmComponent,
    PopoverComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleBundle,
    PipeBundleModule,
    FlexLayoutModule,
    PopoverModule,
    NgApexchartsModule
  ],

  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogConfirmComponent,
    FlexLayoutModule,
    MaterialModuleBundle,
    PipeBundleModule,
    PopoverModule,
    PopoverComponent,
    NgApexchartsModule
  ],

  providers: [
  ],
})
export class SharedBudleModule { }
