import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminConfigsComponent } from './configs/configs.component';

export const routes: Routes = [
  { path: "admin", component: AdminComponent,
    children: [
      { path: '', redirectTo: 'configs', pathMatch: 'full' },
      { path: 'configs', component:  AdminConfigsComponent },
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
export class AdminRoutingModule {}
