import { Component } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { ControlsComponent } from './controls/controls.component';
import { IBoardCell } from './models/board.model';
import { GameStatusType } from './models/game.model';
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
  protected players = new Map<IPlayer['id'], IPlayer>([
    [
      'X',
      {
        id: 'X',
        counter: 0,
      },
    ],
    [
      'O',
      {
        id: 'O',
        counter: 0,
      },
    ],
  ]);
  protected currentPlayer: IPlayer['id'] = 'X';
  private boardState = new Map<number, IBoardCell>();
  protected status: GameStatusType = 'idle';

  constructor() {
    this.init();
  }

  private init() {
    this.boardState = this.generateBoardState();
  }

  private generateBoardState(): Map<number, IBoardCell> {
    const state = new Map<number, IBoardCell>();
    for (let index = 0; index < BOARD_SIZE * BOARD_SIZE; index++) {
      state.set(index + 1, { id: index + 1, value: null });
    }
    return state;
  }

  protected get board(): IBoardCell[] {
    return Array.from(this.boardState.values());
  }

  private checkHorizontalLines(
    board: IBoardCell[],
    rows: IPlayer['id'][][]
  ): (index: number) => void {
    let track = 0;

    return (index: number): void => {
      if (index % BOARD_SIZE === 0 && index !== 0) track++;

      if (index % BOARD_SIZE === 0) rows.push([]);

      board[index]?.value === this.currentPlayer &&
        rows[track].push(this.currentPlayer);
    };
  }

  private checkVerticalLines(
    board: IBoardCell[],
    cols: IPlayer['id'][][]
  ): (index: number) => void {
    let track = 0;
    return (index: number): void => {
      if (index % BOARD_SIZE === 0 && index !== 0) track = 0;

      const isCurrentPlayerMarked = board[index]?.value === this.currentPlayer;

      if (cols[track] === undefined) {
        cols[track] = [];
        isCurrentPlayerMarked && cols[track].push(this.currentPlayer);
      } else {
        isCurrentPlayerMarked && cols[track].push(this.currentPlayer);
      }

      track++;
    };
  }

  private checkDiagonalLines(
    board: IBoardCell[],
    diag: IPlayer['id'][][]
  ): (index: number) => void {
    let leftPad = 0;
    let rightPad = 0;

    function checkLeftToRight(
      index: number,
      currentPlayer: IPlayer['id']
    ): void {
      if (index === 0) {
        board[index + leftPad].value === currentPlayer
          ? diag.push([currentPlayer])
          : diag.push([]);
      }
      if (index % BOARD_SIZE === 0 && index !== 0) {
        leftPad = Math.trunc(board[index].id / BOARD_SIZE);

        board[index + leftPad].value === currentPlayer &&
          diag[0].push(currentPlayer);
      }
    }

    function checkRightToLeft(
      index: number,
      currentPlayer: IPlayer['id']
    ): void {
      if (index === BOARD_SIZE - 1) {
        board[index].value === currentPlayer
          ? diag.push([currentPlayer])
          : diag.push([]);
      }
      if (index % BOARD_SIZE === 0 && index !== 0) {
        rightPad = Math.trunc(board[index].id / BOARD_SIZE);

        board[index + (BOARD_SIZE - 1) - rightPad].value === currentPlayer &&
          diag[1].push(currentPlayer);
      }
    }

    return (index: number): void => {
      checkLeftToRight(index, this.currentPlayer);
      checkRightToLeft(index, this.currentPlayer);
    };
  }

  private countFilledCells(
    board: IBoardCell[],
    count: { value: number }
  ): (index: number) => void {
    return (index: number) => {
      if (board[index].value) count.value++;
    };
  }

  private evaluateBoardState(board: IBoardCell[]): {
    winner: boolean;
    draw: boolean;
  } {
    const filled = { value: 0 };
    const rows: IPlayer['id'][][] = [];
    const cols: IPlayer['id'][][] = [];
    const diag: IPlayer['id'][][] = [];
    const horizontalLines = this.checkHorizontalLines(board, rows);
    const verticalLines = this.checkVerticalLines(board, cols);
    const diagonalLines = this.checkDiagonalLines(board, diag);
    const filledCells = this.countFilledCells(board, filled);

    for (let index = 0; index < board.length; index++) {
      horizontalLines(index);
      verticalLines(index);
      diagonalLines(index);
      filledCells(index);
    }

    const winner =
      rows.some((r) => r.length === BOARD_SIZE) ||
      cols.some((c) => c.length === BOARD_SIZE) ||
      diag.some((d) => d.length === BOARD_SIZE);
    const draw = !winner && filled.value >= BOARD_SIZE * BOARD_SIZE;

    return {
      winner,
      draw,
    };
  }

  private handlePlay(): void {
    this.switchPlayer();
    this.status = 'playing';
  }

  private switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  private handleDraw(): void {
    this.status = 'draw';
  }

  private handleWon(): void {
    const playerStats = this.players.get(this.currentPlayer);

    if (playerStats) {
      this.players.set(this.currentPlayer, {
        ...playerStats,
        counter: playerStats.counter + 1,
      });
    }
    this.status = 'won';
  }

  private updateBoard(cellId: number, cellFound: IBoardCell): void {
    this.boardState.set(cellId, { ...cellFound, value: this.currentPlayer });
  }

  protected handleCellClick(cellId: IBoardCell['id']): void {
    const cellFound = this.boardState.get(cellId);

    if (!cellFound || cellFound?.value) return;

    this.updateBoard(cellId, cellFound);

    const { winner, draw } = this.evaluateBoardState(this.board);

    if (winner) return this.handleWon();

    if (draw) return this.handleDraw();

    this.handlePlay();
  }
}
