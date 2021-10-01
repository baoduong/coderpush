import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikedComponent } from './liked.component';

const routes: Routes = [
  {
    path: '',
    component: LikedComponent,
    data: { state: 'AnimationRouteLiked' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LikedRoutingModule {}
