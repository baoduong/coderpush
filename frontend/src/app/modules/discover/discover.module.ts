import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverComponent } from './discover.component';
import { DiscoverResolver } from './discover.resolver';
import { CardDiscoverUserComponent } from './components/card-discover-user/card-user.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DiscoverComponent,
    CardDiscoverUserComponent,
    
  ],
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    SharedModule
  ],
  providers: [
    DiscoverResolver
  ]
})
export class DiscoverModule { }
