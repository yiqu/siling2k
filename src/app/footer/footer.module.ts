import { NgModule } from '@angular/core';
import { MaterialModuleBundle } from '../shared/material-bundle';
import { SharedBudleModule } from '../shared/shared.module';
import { AppFooterComponent } from './footer.component';

@NgModule({
  imports: [
    SharedBudleModule
  ],
  exports: [
    AppFooterComponent
  ],
  declarations: [
    AppFooterComponent
  ],
  providers: [],
})
export class FooterModule { }
