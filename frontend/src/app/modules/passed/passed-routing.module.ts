import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassedComponent } from './passed.component';

const routes: Routes = [
  {
    path: '',
    component: PassedComponent,
    data: { state: 'AnimationRoutePassed' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassedRoutingModule {}
