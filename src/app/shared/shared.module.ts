import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogConfirmComponent } from './confirm-dialog/dialog.component';
import { MaterialModuleBundle } from './material-bundle';
import { PipeBundleModule } from './pipes/pipe-bundle.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleBundle,
    PipeBundleModule,
    FlexLayoutModule
  ],

  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogConfirmComponent,
    FlexLayoutModule,
    MaterialModuleBundle
  ],

  declarations: [
    DialogConfirmComponent,
  ],

  providers: [

  ],
})
export class SharedBudleModule { }
