import { NgClass, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StatusType } from '../rockPaper.component';

@Component({
  standalone: true,
  selector: 'app-rock-paper-status',
  templateUrl: './status.component.html',
  imports: [UpperCasePipe, NgClass],
})
export class StatusComponent {
  @Input({ required: true }) playerChoice!: string | null;
  @Input({ required: true }) cpuChoice!: string | null;
  @Input({ required: true }) status!: StatusType;
}
