import { NgModule } from '@angular/core';
import { PipeBundleModule } from '../shared/pipes/pipe-bundle.module';
import { SharedBudleModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { SummaryComponent } from './home/home.component';
import { NewEntryDialogComponent } from './new-entry-dialog/new-entry-dialog.component';
import { NewEntryDialogService } from './new-entry-dialog/new-entry-dialog.service';


@NgModule({
  imports: [
    SharedBudleModule,
    CoreRoutingModule,
  ],

  exports: [],

  declarations: [
    CoreComponent,
    SummaryComponent,
    NewEntryDialogComponent
  ],

  providers: [
    NewEntryDialogService
  ],
})
export class CoreModule { }
