import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'discover', pathMatch: 'full' },

  {
    path: 'discover',
    loadChildren: () =>
      import('./modules/discover/discover.module').then(
        (m) => m.DiscoverModule
      ),
  },
  {
    path: 'passed',
    loadChildren: () =>
      import('./modules/passed/passed.module').then((m) => m.PassedModule),
  },
  {
    path: 'liked',
    loadChildren: () =>
      import('./modules/liked/liked.module').then((m) => m.LikedModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
