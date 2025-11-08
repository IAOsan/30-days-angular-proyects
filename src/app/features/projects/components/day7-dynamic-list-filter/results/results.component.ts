import { Component, Input } from '@angular/core';
import { ResultComponent } from './result/result.component';

@Component({
  standalone: true,
  selector: 'dynamic-list-results',
  templateUrl: './results.component.html',
  imports: [ResultComponent]
})
export class ResultsComponent {
  @Input({required: true}) results!: string[];
}
