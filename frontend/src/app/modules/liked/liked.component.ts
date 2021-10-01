import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FullProfileModel } from 'src/app/models/models';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss'],
})
export class LikedComponent implements OnInit {
  list: FullProfileModel[] = [];

  constructor(private interactionSv: InteractionService) {
    this.list = this.interactionSv.getLikedList();
  }

  ngOnInit(): void {}
}
