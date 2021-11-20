import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoadingModule } from '../shared/loading/loading.module';
import { PipeBundleModule } from '../shared/pipes/pipe-bundle.module';
import { SharedBudleModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { SummaryComponent } from './home/home.component';
import { SilingColumnComponent } from './home/siling-column/column.component';
import { SilingColumnEntryComponent } from './home/siling-column/entry/entry.component';
import { CoreSummaryComponent } from './home/summary/summary.component';
import { NewEntryDialogComponent } from './new-entry-dialog/new-entry-dialog.component';
import { NewEntryDialogService } from './new-entry-dialog/new-entry-dialog.service';
import { dashboardEffects } from './store/core.effects';
import { silingDashboardReducer } from './store/core.reducer';
import { dashboardUiReducer } from './store/dashboard.reducer';


@NgModule({
  imports: [
    SharedBudleModule,
    LoadingModule,
    EffectsModule.forFeature(dashboardEffects),
    StoreModule.forFeature('dashboard', silingDashboardReducer),
    StoreModule.forFeature('dashboardUI', dashboardUiReducer),
    CoreRoutingModule,
    PipeBundleModule
  ],

  exports: [],

  declarations: [
    CoreComponent,
    SummaryComponent,
    NewEntryDialogComponent,
    SilingColumnComponent,
    SilingColumnEntryComponent,
    CoreSummaryComponent
  ],

  providers: [
    NewEntryDialogService
  ],
})
export class CoreModule { }
