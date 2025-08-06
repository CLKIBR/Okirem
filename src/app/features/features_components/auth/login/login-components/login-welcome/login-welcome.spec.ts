import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWelcome } from './login-welcome';

describe('Login', () => {
  let component: LoginWelcome;
  let fixture: ComponentFixture<LoginWelcome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginWelcome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginWelcome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
