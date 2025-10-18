import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CapitalizePipe } from '../../../../shared/pipes/capitalize.pipe';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const MAX_ATTEMPTS = 10;

@Component({
  selector: 'app-guess-number',
  templateUrl: './guessNumber.component.html',
  styleUrl: './guessNumber.component.css',
  imports: [FormsModule, NgClass, CapitalizePipe],
})
export class GuessNumberComponent {
  protected numberToGuess = this.generateRandomNumber();
  protected status: 'idle' | 'failed' | 'win' | 'loose' = 'idle';
  protected message = '';
  protected guessedNumberStatus = '';
  protected attempts = MAX_ATTEMPTS;
  protected guessedNumbers = 0;

  protected get minNumber(): number {
    return MIN_NUMBER;
  }

  protected get maxNumber(): number {
    return MAX_NUMBER;
  }

  private generateRandomNumber(): number {
    const randomNumber = Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER;
    return Math.trunc(randomNumber);
  }

  protected handleSubmit(form: NgForm) {
    const { guessedNumber } = form.value;

    if (guessedNumber < MIN_NUMBER) return;

    if (this.attempts === 1) {
      this.guessedNumberStatus = 'Nice try.';
      this.message = `The number was ${this.numberToGuess} but you ran out of attempts.`;
      this.status = 'loose';
      return;
    }

    if (guessedNumber !== this.numberToGuess) {
      const isLowerGuess = guessedNumber < this.numberToGuess;
      this.guessedNumberStatus = isLowerGuess
        ? 'You came up short.'
        : 'You overshot it';
      this.message = isLowerGuess
        ? 'Try something bigger.'
        : 'Try something smaller.';
      this.status = 'failed';
      this.attempts--;
    }

    if (guessedNumber === this.numberToGuess) {
      this.guessedNumberStatus = 'Congratulations.';
      this.message = `Your number was ${
        this.numberToGuess
      } and you guessed it in ${MAX_ATTEMPTS - this.attempts} attemps.`;
      this.status = 'win';
    }
  }

  protected handleGuessedNumberChange(): void {
    this.guessedNumberStatus = '';
    this.message = '';
    this.status = 'idle';
  }

  protected handleReset(): void {
    if (this.status === 'win') this.guessedNumbers++;

    this.numberToGuess = this.generateRandomNumber();
    this.guessedNumberStatus = '';
    this.message = '';
    this.status = 'idle';
    this.attempts = MAX_ATTEMPTS;
  }
}
