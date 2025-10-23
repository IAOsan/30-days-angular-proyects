import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BoardCellCoordsType } from '../models/board.model';
import { IPlayer } from '../models/player.model';

@Component({
  selector: 'tic-tac-toe-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent {
  @Input({ required: true }) board!: BoardCellCoordsType[];
  @Output() cellClicked = new EventEmitter<BoardCellCoordsType>();

  emitCellClicked(cellCoords: BoardCellCoordsType): void {
    this.cellClicked.emit(cellCoords);
  }
}
