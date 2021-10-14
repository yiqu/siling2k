import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedBudleModule } from '../shared/shared.module';
import { adminEffects } from './store/admin.effects';
import { adminInfoReducer } from './store/admin.reducer';

@NgModule({
  imports: [
    SharedBudleModule,
    EffectsModule.forFeature(adminEffects),
    StoreModule.forFeature('admin', adminInfoReducer),
  ],

  exports: [],

  declarations: [],

  providers: [],
})
export class AdminModule { }
