import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-rock-paper-score',
  templateUrl: './score.component.html',
})
export class ScoreComponent {
  @Input({required: true}) playerScore!: number;
  @Input({required: true}) cpuScore!: number;
}
