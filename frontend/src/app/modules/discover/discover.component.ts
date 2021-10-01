import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { distinct, distinctUntilChanged, filter } from 'rxjs/operators';
import { CARD_ANIMATION } from 'src/app/constant/constance';
import {
  FullProfileModel,
  ListUserModel,
  UserModel,
} from 'src/app/models/models';
import { DiscoverService } from 'src/app/services/discover.service';
import { InteractionService } from 'src/app/services/interaction.service';
export const swiperight = [
  style({ opacity: 1 }),
  style({
    transform: 'translate3d(200%, 100px, 10px) rotate(60deg)',
    opacity: 0,
  }),
];

export const swipeleft = [
  style({ opacity: 1 }),
  style({
    transform: 'translate3d(-200%, 100px, 10px) rotate(-60deg)',
    opacity: 0,
  }),
];
@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(950, keyframes(swiperight))),
      transition('* => swipeleft', animate(950, keyframes(swipeleft))),
    ]),
  ],
})
export class DiscoverComponent implements OnInit {
  $listUser = new BehaviorSubject<UserModel[]>([]);
  $userAbove = new BehaviorSubject<UserModel | undefined>(undefined);
  $fullProfileAbove = new BehaviorSubject<FullProfileModel | undefined>(
    undefined
  );

  $userBelow = new BehaviorSubject<UserModel | undefined>(undefined);
  $fullProfileBelow = new BehaviorSubject<UserModel | undefined>(undefined);
  animationState: string = '';
  $index = new BehaviorSubject<number>(0);

  isAnimation = false;
  $waitFetchFullProfile = new BehaviorSubject<boolean>(false);

  constructor(
    private actRoute: ActivatedRoute,
    private discoverService: DiscoverService,
    private interact: InteractionService
  ) {}

  ngOnInit(): void {
    this.actRoute.data.subscribe((data) => {
      const listUser = (data.listUser as ListUserModel).data;
      this.$listUser.next(listUser);
    });
  }

  ngAfterViewInit() {
    this.$index.pipe(distinctUntilChanged()).subscribe((index) => {
      this.$userBelow.next(this.$listUser.value[index]);
    });
    this.startAnimation('');
  }

  startAnimation(state: CARD_ANIMATION) {
    this.isAnimation = true;
    if (!this.animationState) {
      this.animationState = state;
    }
    if (this.$userBelow.value) {
      this.$waitFetchFullProfile.next(true);
      this.discoverService
        .fetchFullProfile(this.$userBelow.value.id)
        .subscribe((data) => {
          this.$fullProfileAbove.next(data);
          this.$waitFetchFullProfile.next(false);
        });
    }
  }
  resetAnimationState(event: any) {
    this.isAnimation = false;
    if (event.toState == '') {
      this.$userAbove.next(this.$userBelow.value);
      this.$index.next(this.$index.value + 1);
    }
    this.animationState = '';
  }

  skip() {
    if (this.isAnimation) return;
    this.interact.pass(this.$fullProfileAbove.value as FullProfileModel);
    this.$fullProfileAbove.next(undefined);
    this.startAnimation('swiperight');
  }
  
  like() {
    if (this.isAnimation) return;
    this.interact.like(this.$fullProfileAbove.value as FullProfileModel);
    this.$fullProfileAbove.next(undefined);
    this.startAnimation('swipeleft');
  }
}
