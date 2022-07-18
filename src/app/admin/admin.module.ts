import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { ListComponent } from './list/list.component';
import { MatModule } from '../mat/mat.module';
import { HelloComponent } from './hello/hello.component';
@NgModule({
  declarations: [

    ListComponent,
     HelloComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatModule
  ]
})
export class AdminModule { }
