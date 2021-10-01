import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ListUserModel } from 'src/app/models/models';
import { DiscoverService } from 'src/app/services/discover.service';

@Injectable({ providedIn: 'root' })
export class DiscoverResolver implements Resolve<ListUserModel> {
  constructor(private discoverService: DiscoverService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ListUserModel> {
    return this.discoverService.fetchUsers();
  }
}
