import { NgModule } from '@angular/core';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  exports: [
    NzBackTopModule,
    NzMessageModule
  ]
})
export class ZorroModuleBundle {}
