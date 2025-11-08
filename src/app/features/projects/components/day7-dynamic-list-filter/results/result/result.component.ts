import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'dynamic-list-result',
  template: '{{value}}',
})
export class ResultComponent {
  @Input({ required: true }) value!: string;
}
