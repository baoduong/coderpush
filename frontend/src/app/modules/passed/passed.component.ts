import { Component, OnInit } from '@angular/core';
import { FullProfileModel } from 'src/app/models/models';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-passed',
  templateUrl: './passed.component.html',
  styleUrls: ['./passed.component.scss'],
})
export class PassedComponent implements OnInit {
  list: FullProfileModel[] = [];
  constructor(private interactionSv: InteractionService) {
    this.list = this.interactionSv.getPassedList();
  }

  ngOnInit(): void {}
}
