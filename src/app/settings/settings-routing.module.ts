import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { SettingsCoreComponent } from './core/core.component';

export const routes: Routes = [
  { path: "", component: SettingsComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component:  SettingsCoreComponent },
    ],
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class SettingsRoutingModule {}
