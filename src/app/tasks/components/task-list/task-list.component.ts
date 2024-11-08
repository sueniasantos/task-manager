import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Task } from '../../task.model';
import { TaskCreateComponent } from '../task-create/task-create.component';
import { TaskEditDialogComponent } from '../task-edit-dialog/task-edit-dialog.component';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskService } from '../../services/task.service';
import { TaskDeleteDialogComponent } from '../task-delete-dialog/task-delete-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  searchQuery: string = '';
  selectedStatus: string = '';
  allTasks: Task[] = [];
  filteredTasks: Task[] = [];
  statusOptions: string[] = ['Pendente', 'Em andamento', 'Concluído'];

  constructor(private taskService: TaskService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.allTasks = this.taskService.loadTasks();
    this.applyTaskFilters();
  }

  applyTaskFilters(): void {
    this.filteredTasks = this.allTasks.filter(task => {
      const matchesStatus = this.selectedStatus ? task.status === this.selectedStatus : true;
      const matchesSearchQuery = task.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesStatus && matchesSearchQuery;
    });
  }

  openCreateTaskDialog(): void {
    const dialogRef = this.dialog.open(TaskCreateComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadTasks();
    });
  }

  openEditTaskDialog(task: Task): void {
    const dialogRef = this.dialog.open(TaskEditDialogComponent, {
      width: '400px',
      data: { ...task }
    });

    dialogRef.afterClosed().subscribe(updatedTask => {
      if (updatedTask) {
        this.taskService.updateTask(updatedTask);
        this.loadTasks();
      }
    });
  }

  openDeleteTaskDialog(task: Task): void {
    const dialogRef = this.dialog.open(TaskDeleteDialogComponent, {
      width: '250px',
      data: task
    });

    dialogRef.afterClosed().subscribe(isConfirmed => {
      if (isConfirmed) {
        this.taskService.deleteTask(task.id);
        this.loadTasks();
      }
    });
  }

  openTaskDetailsDialog(task: Task): void {
    this.dialog.open(TaskDetailComponent, {
      width: '400px',
      data: task
    });
  }
}
