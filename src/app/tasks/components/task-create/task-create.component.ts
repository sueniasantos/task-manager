import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
})
export class TaskCreateComponent {
  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    public dialogRef: MatDialogRef<TaskCreateComponent>
  ) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  addTask(): void {
    if (this.taskForm.valid) {
      const newTask = this.taskForm.value;
      this.taskService.addTask(newTask);
      this.dialogRef.close();
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
