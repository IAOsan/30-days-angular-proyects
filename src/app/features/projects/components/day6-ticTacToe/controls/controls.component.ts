import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'tic-tac-toe-controls',
  templateUrl: './controls.component.html',
})
export class ControlsComponent {
  @Input({ required: true }) onRestart!: () => void;
}
