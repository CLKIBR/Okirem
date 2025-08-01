import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardStore } from './reward-store';

describe('RewardStore', () => {
  let component: RewardStore;
  let fixture: ComponentFixture<RewardStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardStore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
