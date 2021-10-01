import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouteAnimationsComponent } from './route-animations/route-animations.component';
import { RouterModule } from '@angular/router';
import { CardUserComponent } from './components/card-user/card-user.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AgePipe } from './age.pipe';

@NgModule({
  declarations: [
    MainLayoutComponent,
    RouteAnimationsComponent,
    NavigationComponent,
    CardUserComponent,
    AgePipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    MainLayoutComponent,
    NavigationComponent,
    RouteAnimationsComponent,
    CardUserComponent,
    AgePipe,
  ],
})
export class SharedModule {}
