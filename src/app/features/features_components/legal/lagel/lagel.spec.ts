import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lagel } from './lagel';

describe('Lagel', () => {
  let component: Lagel;
  let fixture: ComponentFixture<Lagel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lagel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lagel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
