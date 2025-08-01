import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardHistory } from './reward-history';

describe('RewardHistory', () => {
  let component: RewardHistory;
  let fixture: ComponentFixture<RewardHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
