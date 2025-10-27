import { Component, Input } from '@angular/core';
import { IPlayer } from '../models/player.model';
import { GameStatusType } from '../models/game.model';

@Component({
  selector: 'tic-tac-toe-turn-indicator',
  templateUrl: './turnIndicator.component.html',
})
export class TurnIndicatorComponent {
  @Input({ required: true }) status!: GameStatusType;
  @Input({ required: true }) currentPlayer!: IPlayer['id'];
}
