import { NgModule } from '@angular/core';
import { SharedBudleModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { SummaryComponent } from './home/home.component';


@NgModule({
  imports: [
    SharedBudleModule,
    CoreRoutingModule
  ],

  exports: [],

  declarations: [
    CoreComponent,
    SummaryComponent
  ],

  providers: [],
})
export class CoreModule { }
