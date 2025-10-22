import { Component } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { ControlsComponent } from './controls/controls.component';
import { ScorePanelComponent } from './scorePanel/scorePanel.component';
import { TurnIndicatorComponent } from './turnIndicator/turnIndicator.component';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './ticTacToe.component.html',
  imports: [
    ScorePanelComponent,
    BoardComponent,
    ControlsComponent,
    TurnIndicatorComponent,
  ],
})
export class TicTacToeComponent {}
