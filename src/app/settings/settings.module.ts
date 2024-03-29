import { TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoadingModule } from '../shared/loading/loading.module';
import { SharedBudleModule } from '../shared/shared.module';
import { SettingsCoreComponent } from './core/core.component';
import { NewSilingInsDialogService } from './core/new-siling-dialog.service';
import { NewSilingDialogComponent } from './core/new-siling-dialog/new-siling-dialog.component';
import { ShowHideComponent } from './core/show-hide-drag/show-hide-drag.component';
import { SettingsRoutingModule } from './settings-routing.module';

import { SettingsComponent } from './settings.component';
import { settingsEffects } from './store/settings.effects';
import { settingsReducer } from './store/settings.reducer';
import { NgBusyWatchModule } from 'ng-busy-watch';

@NgModule({
  imports: [
    SharedBudleModule,
    LoadingModule,
    SettingsRoutingModule,
    EffectsModule.forFeature(settingsEffects),
    StoreModule.forFeature('settings', settingsReducer),
    NgBusyWatchModule.forRoot({
      extraCssClass: 'busy-css-class',
      message: 'Loading Settings Data...',
      showSpinner: true
    }),
  ],

  exports: [],

  declarations: [
    SettingsComponent,
    SettingsCoreComponent,
    ShowHideComponent,
    NewSilingDialogComponent
  ],

  providers: [
    NewSilingInsDialogService,
    TitleCasePipe
  ],
})
export class SettingsModule { }
