import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskDeleteDialogComponent } from './components/task-delete-dialog/task-delete-dialog.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskEditDialogComponent } from './components/task-edit-dialog/task-edit-dialog.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  declarations: [
    TaskCreateComponent,
    TaskDeleteDialogComponent,
    TaskDetailComponent,
    TaskEditDialogComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TasksModule { }
