import { Injectable } from '@angular/core';
import { ITask } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: ITask[] = [];

  getAllTasks(): ITask[] {
    return this.tasks;
  }

  addNewTask(task: Pick<ITask, 'description'>): void {
    const newTask: ITask = {
      ...task,
      completed: false,
      createdAt: new Date().toISOString(),
      id: new Date().getTime().toString(16),
    };

    this.tasks = [...this.tasks, newTask];
    console.log(this.tasks);
  }

  deleteTaskById(taskId: ITask['id']): ITask[] {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);

    return this.tasks;
  }
}
