import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { GuessCounterComponent } from './guessCounter/guessCounter.component';
import { GuessFeedback } from './guessFeedback/guessFeedback.component';
import { GuessFormComponent } from './guessForm/guessForm.component';
import { HeaderComponent } from './header/header.component';

const MIN_GUESS_VALUE = 1;
const MAX_GUESS_VALUE = 100;
const MAX_ATTEMPTS = 10;

type StatusType = 'idle' | 'failed' | 'won' | 'lost';

@Component({
  selector: 'app-guess-number',
  templateUrl: './guessNumber.component.html',
  styleUrl: './guessNumber.component.css',
  imports: [
    FormsModule,
    GuessFormComponent,
    HeaderComponent,
    GuessCounterComponent,
    GuessFeedback,
  ],
})
export class GuessNumberComponent {
  protected numberToGuess = this.generateRandomNumber();
  protected attempts = MAX_ATTEMPTS;
  protected status: StatusType = 'idle';
  protected guessedNumbers = 0;
  protected feedback = {
    status: '',
    message: '',
  };

  protected get minGuessValue(): number {
    return MIN_GUESS_VALUE;
  }

  protected get maxGuessValue(): number {
    return MAX_GUESS_VALUE;
  }

  private generateRandomNumber(): number {
    const randomNumber =
      Math.random() * (MAX_GUESS_VALUE - MIN_GUESS_VALUE) + MIN_GUESS_VALUE;
    return Math.trunc(randomNumber);
  }

  private handleGameLost(): void {
    this.feedback.status = 'Nice try.';
    this.feedback.message = `The number was ${this.numberToGuess} but you ran out of attempts.`;
    this.status = 'lost';
  }

  private handleGameWon(): void {
    this.feedback.status = 'Congratulations.';
    this.feedback.message = `Your number was ${
      this.numberToGuess
    } and you guessed it in ${this.getAttemptsToWin()} attempts.`;
    this.status = 'won';
  }

  private handleIncorrectGuess(guessedNumber: number): void {
    const isLowerGuess = guessedNumber < this.numberToGuess;

    this.feedback.status = isLowerGuess
      ? 'You came up short.'
      : 'You overshot it';
    this.feedback.message = isLowerGuess
      ? 'Try something bigger.'
      : 'Try something smaller.';
    this.status = 'failed';
    this.attempts--;
  }

  protected handleSubmit(form: NgForm): void {
    const { guessedNumber } = form.value;
    const isGuessOutOfRange =
      guessedNumber < MIN_GUESS_VALUE || guessedNumber > MAX_GUESS_VALUE;

    if (isGuessOutOfRange) return;

    if (this.attempts === MIN_GUESS_VALUE) return this.handleGameLost();

    if (guessedNumber === this.numberToGuess) {
      this.handleGameWon();
    } else {
      this.handleIncorrectGuess(guessedNumber);
    }
  }

  private getAttemptsToWin(): number {
    return MAX_ATTEMPTS - this.attempts;
  }

  private clearFeedback(): void {
    this.feedback.status = '';
    this.feedback.message = '';
    this.status = 'idle';
  }

  protected handleGuessedNumberChange(): void {
    this.clearFeedback();
  }

  private restartGame() {
    this.numberToGuess = this.generateRandomNumber();
    this.clearFeedback();
    this.attempts = MAX_ATTEMPTS;
  }

  protected handleResetGame(): void {
    if (this.status === 'won') this.guessedNumbers++;

    this.restartGame();
  }
}
