import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-edit-dialog',
  templateUrl: './task-edit-dialog.component.html',
})
export class TaskEditDialogComponent {
  editTaskForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogReference: MatDialogRef<TaskEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public taskData: Task
  ) {
    this.editTaskForm = this.formBuilder.group({
      title: [this.taskData.title, [Validators.required]],
      description: [this.taskData.description, [Validators.required]],
      status: [this.taskData.status, [Validators.required]]
    });
  }

  save(): void {
    if (this.editTaskForm.valid) {
      const updatedTask = { ...this.taskData, ...this.editTaskForm.value };
      this.dialogReference.close(updatedTask);
    }
  }

  cancel(): void {
    this.dialogReference.close();
  }
}
