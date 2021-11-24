import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminConfigsComponent } from './configs/configs.component';
import { CompanyDetailComponent } from './configs/company-detail/company-detail.component';
import { CompanyDetailActionsComponent } from './configs/company-detail/actions/actions.component';

export const routes: Routes = [
  { path: "admin", component: AdminComponent,
    children: [
      { path: '', redirectTo: 'configs', pathMatch: 'full' },
      { path: 'configs', component:  AdminConfigsComponent,
        data: {
          pageTitle: 'Configurations'
        },
      },
      { path: 'configs/:companyId', component: CompanyDetailComponent,
        data: {
          pageTitle: 'Institution Detail'
        },
        children: [
          { path: ':actionId', component: CompanyDetailActionsComponent }
        ]
      }
    ],
    data: {
      pageTitle: 'Admin'
    }
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
