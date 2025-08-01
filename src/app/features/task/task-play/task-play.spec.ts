import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPlay } from './task-play';

describe('TaskPlay', () => {
  let component: TaskPlay;
  let fixture: ComponentFixture<TaskPlay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskPlay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskPlay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
