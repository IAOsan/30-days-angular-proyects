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
  private boardState: IBoardState = {
    0: {
      0: { id: 0, value: null },
      1: { id: 1, value: null },
      2: { id: 2, value: null },
    },
    1: {
      0: { id: 0, value: null },
      1: { id: 1, value: null },
      2: { id: 2, value: null },
    },
    2: {
      0: { id: 0, value: null },
      1: { id: 1, value: null },
      2: { id: 2, value: null },
    },
  };

  protected get board(): BoardCellCoordsType[] {
    return this.mapBoardStateToScreen();
  }

  private mapBoardStateToScreen(): BoardCellCoordsType[] {
    const boardCells: IBoardCell[] = Object.values(this.boardState).flatMap(
      (row) => Object.values(row)
    );

    return boardCells.map((cell, id) => {
      const x = Math.floor(id / BOARD_SIZE);
      const y = cell.id;

      return {
        id,
        x,
        y,
        value: cell.value,
      };
    });
  }

  private updateBoardCell(
    x: BoardCellCoordsType['x'],
    y: BoardCellCoordsType['y']
  ): void {
    const isMarked = !!this.boardState[x][y].value;

    if (isMarked) return;

    this.boardState[x][y].value = this.currentPlayer;
  }

  private switchPlayer(currentPlayer: IPlayer['id']): void {
    this.currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }

  protected handleCellClick(cellCoords: BoardCellCoordsType) {
    this.updateBoardCell(cellCoords.x, cellCoords.y);
    this.switchPlayer(this.currentPlayer);
  }
}
