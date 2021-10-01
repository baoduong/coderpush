import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassedRoutingModule } from './passed-routing.module';
import { PassedComponent } from './passed.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PassedComponent
  ],
  imports: [
    CommonModule,
    PassedRoutingModule,
    SharedModule
  ]
})
export class PassedModule { }
