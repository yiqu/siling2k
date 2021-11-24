import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './404/404.component';
import { NetworkAwarePreloadStrategy } from './preload-strat';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'home',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
    data: {
      pageTitle: 'Dashboard'
    }
  },
  // { path: 'settings',
  //   loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  // },
  { path: '**', component: NotFoundComponent,
    data: {
      pageTitle: 'Not Found'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: NetworkAwarePreloadStrategy,
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
