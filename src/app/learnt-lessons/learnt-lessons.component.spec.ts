import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearntLessonsComponent } from './learnt-lessons.component';

describe('LearntLessonsComponent', () => {
  let component: LearntLessonsComponent;
  let fixture: ComponentFixture<LearntLessonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearntLessonsComponent]
    });
    fixture = TestBed.createComponent(LearntLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
