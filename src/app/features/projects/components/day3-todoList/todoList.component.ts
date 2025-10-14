import { Component, OnInit } from '@angular/core';
import { NewTaskFormComponent } from './tasks/newTaskForm/newTaskForm.component';
import { TaskListComponent } from './tasks/taskList/taskList.component';
import { TaskService } from './tasks/task.service';
import { ITask } from './tasks/task.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todoList.component.html',
  styleUrl: './todoList.component.css',
  imports: [NewTaskFormComponent, TaskListComponent],
})
export class TodoListComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getAllTasks();
  }

  handleAddNewTask(form: NgForm): void {
    if (form.invalid) return;

    this.tasks = this.taskService.addNewTask(form.value);
    form.reset();
  }

  handleDeleteTask(taskId: ITask['id']): void {
    const confirm = window.confirm(
      'Are you sure you want to delete this task?'
    );

    if (!confirm) return;

    this.tasks = this.taskService.deleteTaskById(taskId);
  }
}
