import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { distinct, distinctUntilChanged, filter } from 'rxjs/operators';
import { DiscoverService } from 'src/app/services/discover.service';

@Component({
  selector: 'app-card-discover-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('titleAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease', style({ opacity: 1})), // to
      ]),
    ]),
  ],
})
export class CardDiscoverUserComponent implements OnInit {
  @Input() userInformation = new BehaviorSubject<any>(undefined);
  @Input() $fullProfile = new BehaviorSubject<any>(null);

  constructor() {}

  ngOnInit(): void {}
}
