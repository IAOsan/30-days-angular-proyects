import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimeAgoPipe } from '../../../../../../shared/pipes/timeAgo.pipe';
import { ITask } from '../task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  imports: [TimeAgoPipe],
})
export class TaskComponent {
  @Input({ required: true }) id!: ITask['id'];
  @Input({ required: true }) createdAt!: ITask['createdAt'];
  @Input({ required: true }) description!: ITask['description'];
  @Output() taskDeleted = new EventEmitter();

  emitTaskDeleted(): void {
    this.taskDeleted.emit(this.id);
  }
}
