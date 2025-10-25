import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BoardCellCoordsType, IBoardCell } from '../models/board.model';
import { IPlayer } from '../models/player.model';

@Component({
  selector: 'tic-tac-toe-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent {
  @Input({ required: true }) board!: IBoardCell[];
  @Output() cellClicked = new EventEmitter<IBoardCell['id']>();

  emitCellClicked(id: IBoardCell['id']): void {
    this.cellClicked.emit(id);
  }
}
