import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  count: number = 0;

  handleCounterIncrement(): void {
    this.count = this.count + 1;
  }
}
