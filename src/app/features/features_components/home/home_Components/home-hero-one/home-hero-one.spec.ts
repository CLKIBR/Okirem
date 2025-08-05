import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeroOne } from './home-hero-one';

describe('HomeHeroOne', () => {
  let component: HomeHeroOne;
  let fixture: ComponentFixture<HomeHeroOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHeroOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHeroOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
