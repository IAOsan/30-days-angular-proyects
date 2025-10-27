import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBoardCell } from '../models/board.model';
import { GameStatusType } from '../models/game.model';

@Component({
  selector: 'tic-tac-toe-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css', '../shared/sharedStyles.css'],
  imports: [NgClass],
})
export class BoardComponent {
  @Input({ required: true }) board!: IBoardCell[];
  @Input({ required: true }) status!: GameStatusType;
  @Output() cellClicked = new EventEmitter<IBoardCell['id']>();

  emitCellClicked(id: IBoardCell['id']): void {
    this.cellClicked.emit(id);
  }
}
