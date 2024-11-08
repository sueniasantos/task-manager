import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDeleteDialogComponent } from './task-delete-dialog.component';

describe('DialogContentComponent', () => {
  let component: TaskDeleteDialogComponent;
  let fixture: ComponentFixture<TaskDeleteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDeleteDialogComponent]
    });
    fixture = TestBed.createComponent(TaskDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
