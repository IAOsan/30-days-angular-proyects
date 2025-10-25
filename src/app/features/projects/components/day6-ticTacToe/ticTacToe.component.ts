import { Component } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { ControlsComponent } from './controls/controls.component';
import { BoardCellCoordsType, IBoardCell } from './models/board.model';
import { IPlayer } from './models/player.model';
import { ScorePanelComponent } from './scorePanel/scorePanel.component';
import { TurnIndicatorComponent } from './turnIndicator/turnIndicator.component';

export type IBoardState = {
  [row: number]: {
    [col: number]: IBoardCell;
  };
};

const BOARD_SIZE = 3;

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
export class TicTacToeComponent {
  protected currentPlayer: IPlayer['id'] = 'X';
  private _boardState = new Map<number, IBoardCell>();

  constructor() {
    this.init();
  }

  private init() {
    for (let index = 0; index < BOARD_SIZE * BOARD_SIZE; index++) {
      this._boardState.set(index + 1, { id: index + 1, value: null });
    }
  }

  protected get board(): IBoardCell[] {
    return Array.from(this._boardState.values());
  }

  protected handleCellClick(cellId: IBoardCell['id']) {
    const cellFound = this._boardState.get(cellId);

    if (!cellFound || cellFound?.value) return;

    this._boardState.set(cellId, { ...cellFound, value: this.currentPlayer });

   

    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }
}
