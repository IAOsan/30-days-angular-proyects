import { Component, Input } from '@angular/core';
import { ITask } from '../task.model';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './taskList.component.html',
  imports: [TaskComponent],
})
export class TaskListComponent {
  @Input({ required: true }) tasks!: ITask[];
}
