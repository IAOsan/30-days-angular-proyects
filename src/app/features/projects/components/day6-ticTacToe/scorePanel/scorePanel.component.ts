import { Component, Input } from '@angular/core';
import { IPlayer } from '../models/player.model';

@Component({
  selector: 'tic-tac-toe-score-panel',
  templateUrl: './scorePanel.component.html',
})
export class ScorePanelComponent {
  @Input({ required: true }) players!: Map<IPlayer['id'], IPlayer>;
}
