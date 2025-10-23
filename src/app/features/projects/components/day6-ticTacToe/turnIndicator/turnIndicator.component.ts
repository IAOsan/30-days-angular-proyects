import { Component, Input } from '@angular/core';
import { IPlayer } from '../models/player.model';

@Component({
  selector: 'tic-tac-toe-turn-indicator',
  template: '<h2 class="heading-3 text-center mt-4 mb-4">{{currentPlayer}}&#39;s turns</h2>',
})
export class TurnIndicatorComponent {
  @Input({required: true}) currentPlayer!: IPlayer['id'];
}
