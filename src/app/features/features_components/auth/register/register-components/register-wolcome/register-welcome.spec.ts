import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWelcome } from './register-wolcome';

describe('RegisterWolcome', () => {
  let component: RegisterWelcome;
  let fixture: ComponentFixture<RegisterWelcome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterWelcome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterWelcome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
