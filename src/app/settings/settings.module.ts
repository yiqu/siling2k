import { TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedBudleModule } from '../shared/shared.module';
import { SettingsCoreComponent } from './core/core.component';
import { NewSilingInsDialogService } from './core/new-siling-dialog.service';
import { NewSilingDialogComponent } from './core/new-siling-dialog/new-siling-dialog.component';
import { ShowHideComponent } from './core/show-hide-drag/show-hide-drag.component';
import { SettingsRoutingModule } from './settings-routing.module';

import { SettingsComponent } from './settings.component';
import { settingsEffects } from './store/settings.effects';
import { settingsReducer } from './store/settings.reducer';

@NgModule({
  imports: [
    SharedBudleModule,
    SettingsRoutingModule,
    EffectsModule.forFeature(settingsEffects),
    StoreModule.forFeature('settings', settingsReducer),
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
