import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedBudleModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminConfigsComponent } from './configs/configs.component';
import { adminEffects } from './store/admin.effects';
import { adminInfoReducer } from './store/admin.reducer';

@NgModule({
  imports: [
    SharedBudleModule,
    EffectsModule.forFeature(adminEffects),
    StoreModule.forFeature('admin', adminInfoReducer),
    AdminRoutingModule
  ],

  exports: [
  ],

  declarations: [
    AdminComponent,
    AdminConfigsComponent
  ],

  providers: [],
})
export class AdminModule { }
