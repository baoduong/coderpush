import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constant/api';
import {
  share,
  map,
  shareReplay,
  publishReplay,
  refCount,
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FullProfileModel, ListUserModel } from '../models/models';

@Injectable({ providedIn: 'root' })
export class DiscoverService {
  constructor(private httpClient: HttpClient) {}

  fetchUsers(): Observable<ListUserModel> {
    return this.httpClient.get(`${API_URL}/user?limit=10`).pipe(
      share(),
      map((data: any) => data)
    );
  }

  fetchFullProfile(userId: string): Observable<FullProfileModel> {
    return this.httpClient
      .get(`${API_URL}/user/${userId}`)
      .pipe(map((data: any) => data));
  }
}
