import { NgModule } from '@angular/core';

import { LoadingComponent } from './loading.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],

  exports: [
    LoadingComponent
  ],

  declarations: [
    LoadingComponent
  ],

  providers: [

  ],
})
export class LoadingModule { }
