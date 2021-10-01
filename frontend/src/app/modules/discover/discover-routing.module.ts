import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './discover.component';
import { DiscoverResolver } from './discover.resolver';

const routes: Routes = [
  {
    path: '',
    component: DiscoverComponent,
    data: { state: 'AnimationRouteDiscover' },
    resolve: {
      listUser: DiscoverResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverRoutingModule {}
