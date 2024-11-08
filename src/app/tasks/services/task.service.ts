import { Injectable } from '@angular/core';
import { Task } from '../task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  loadTasks(): Task[] {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  }

  saveTasks(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  addTask(newTask: Task): void {
    const tasks = this.loadTasks();
    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    newTask.id = newId;
    tasks.push(newTask);
    this.saveTasks(tasks);
  }

  updateTask(updatedTask: Task): void {
    const tasks = this.loadTasks();
    const index = tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      tasks[index] = { ...tasks[index], ...updatedTask };
      this.saveTasks(tasks);
    } else {
      console.error("Tarefa não encontrada para atualização.");
    }
  }

  deleteTask(taskId: number): void {
    const tasks = this.loadTasks();
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    this.saveTasks(updatedTasks);
  }
}
