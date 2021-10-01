import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDiscoverUserComponent } from './card-user.component';

describe('CardUserComponent', () => {
  let component: CardDiscoverUserComponent;
  let fixture: ComponentFixture<CardDiscoverUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDiscoverUserComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDiscoverUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
