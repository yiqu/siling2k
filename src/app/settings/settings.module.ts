import { NgModule } from '@angular/core';
import { SharedBudleModule } from '../shared/shared.module';
import { SettingsCoreComponent } from './core/core.component';
import { SettingsRoutingModule } from './settings-routing.module';

import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [
    SharedBudleModule,
    SettingsRoutingModule
  ],

  exports: [],

  declarations: [
    SettingsComponent,
    SettingsCoreComponent
  ],

  providers: [],
})
export class SettingsModule { }
