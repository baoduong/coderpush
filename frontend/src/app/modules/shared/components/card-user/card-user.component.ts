import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FullProfileModel } from 'src/app/models/models';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardUserComponent implements OnInit {
  @Input() user: FullProfileModel | undefined;
  constructor() {}

  ngOnInit(): void {
    console.log('user', this.user)
  }
}
