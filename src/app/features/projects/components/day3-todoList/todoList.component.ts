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
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.taskService.getAllTasks();
  }

  handleAddNewTask(form: NgForm): void {
    this.taskService.addNewTask(form.value);
    this.loadTasks();
    form.reset();
  }
}
