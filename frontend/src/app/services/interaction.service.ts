import { Injectable } from '@angular/core';
import { FullProfileModel } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class InteractionService {
  likedList: FullProfileModel[] = [];
  passedList: FullProfileModel[] = [];
  constructor() {}

  like(user: FullProfileModel) {
    this.likedList.push(user);
  }

  pass(user: FullProfileModel) {
    this.passedList.push(user);
  }

  getLikedList() {
    return this.likedList;
  }

  getPassedList() {
    return this.passedList;
  }
}
