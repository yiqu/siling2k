import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PipeBundleModule } from '../shared/pipes/pipe-bundle.module';
import { SharedBudleModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { SummaryComponent } from './home/home.component';
import { NewEntryDialogComponent } from './new-entry-dialog/new-entry-dialog.component';
import { NewEntryDialogService } from './new-entry-dialog/new-entry-dialog.service';
import { dashboardEffects } from './store/core.effects';
import { silingDashboardReducer } from './store/core.reducer';


@NgModule({
  imports: [
    SharedBudleModule,
    EffectsModule.forFeature(dashboardEffects),
    StoreModule.forFeature('dashboard', silingDashboardReducer),
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
