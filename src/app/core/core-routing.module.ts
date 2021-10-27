import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { SummaryComponent } from './home/home.component';
import { DashboardLoadDataFireResolver } from '../shared/resolvers/dashboard.resolver';

export const routes: Routes = [
  { path: "", component: CoreComponent,
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      { path: 'summary', component:  SummaryComponent },
    ],
    resolve: { resolverFired: DashboardLoadDataFireResolver },
    runGuardsAndResolvers: 'always'
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
export class CoreRoutingModule {}
