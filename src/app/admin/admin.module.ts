import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoadingModule } from '../shared/loading/loading.module';
import { SharedBudleModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CompanyDetailComponent } from './configs/company-detail/company-detail.component';
import { CompanyDetailActionsComponent } from './configs/company-detail/actions/actions.component';
import { AdminConfigsComponent } from './configs/configs.component';
import { adminEffects } from './store/admin.effects';
import { adminInfoReducer } from './store/admin.reducer';

@NgModule({
  imports: [
    SharedBudleModule,
    EffectsModule.forFeature(adminEffects),
    StoreModule.forFeature('admin', adminInfoReducer),
    LoadingModule,
    AdminRoutingModule
  ],

  exports: [
  ],

  declarations: [
    AdminComponent,
    AdminConfigsComponent,
    CompanyDetailComponent,
    CompanyDetailActionsComponent
  ],

  providers: [],
})
export class AdminModule { }
