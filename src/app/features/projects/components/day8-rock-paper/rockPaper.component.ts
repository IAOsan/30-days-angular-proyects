import { Component } from '@angular/core';
import { ScoreComponent } from './score/score.component';
import { OptionsComponent } from './options/options.component';
import { StatusComponent } from './status/status.component';

export type StatusType = 'idle' | 'won' | 'draw' | 'lose';
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
  protected playerScore: number = 0;
  protected cpuChoice: string | null = null;
  protected cpuScore: number = 0;
  protected status: StatusType = 'idle';
  protected moves: MoveOption[] = MOVES;

  private _getRandomNumber(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  protected handlePlayerMove(playerChoiceId: MoveOption['id']): void {
    const cpuMoveIndex = this._getRandomNumber(0, this.moves.length - 1);
    const cpuMove = MOVES[cpuMoveIndex];
    const playerMove = MOVES[playerChoiceId];

    this.playerChoice = playerMove.name;
    this.cpuChoice = cpuMove.name;

    if (cpuMove.losesTo === playerMove.name) {
      this.status = 'won';
      this.playerScore++;
    } else if (playerMove.losesTo === cpuMove.name) {
      this.status = 'lose';
      this.cpuScore++;
    } else {
      this.status = 'draw';
    }
  }
}
