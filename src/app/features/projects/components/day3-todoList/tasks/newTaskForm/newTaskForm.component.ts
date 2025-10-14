import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './newTaskForm.component.html',
  imports: [FormsModule],
})
export class NewTaskFormComponent {
  @Input({ required: true }) onNewTask!: (form: NgForm) => void;
}
