import { Component } from '@angular/core';
import { ScoreComponent } from './score/score.component';
import { OptionsComponent } from './options/options.component';
import { StatusComponent } from './status/status.component';

export type StatusType = 'idle' | 'won' | 'draw';
export type MoveType = 'rock' | 'paper' | 'scissors';
export type MoveOption = {
  id: number;
  name: MoveType;
  label: string;
  losesTo: MoveType;
};

const MOVES: MoveOption[] = [
  { id: 0, name: 'rock', label: '✊', losesTo: 'paper' },
  { id: 1, name: 'paper', label: '✋', losesTo: 'scissors' },
  { id: 2, name: 'scissors', label: '✌️', losesTo: 'rock' },
];

@Component({
  standalone: true,
  selector: 'app-rock-paper',
  templateUrl: './rockPaper.component.html',
  styleUrl: './rockPaper.component.css',
  imports: [ScoreComponent, OptionsComponent, StatusComponent],
})
export class RockPaperComponent {
  protected playerChoice: string | null = null;
  protected cpuChoice: string | null = null;
  protected status: StatusType = 'idle';
  protected moves: MoveOption[] = MOVES;

  private _getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  protected handlePlayerMove(playerChoiceId: MoveOption['id']): void {
    const cpuMoveIndex = this._getRandomNumber(0, this.moves.length - 1);
    const cpuMove = MOVES[cpuMoveIndex];

    this.playerChoice = MOVES[playerChoiceId].name;
    this.cpuChoice = cpuMove.name;
  }
}
