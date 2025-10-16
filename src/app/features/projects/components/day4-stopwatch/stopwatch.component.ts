import { NgClass } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  imports: [NgClass],
})
export class StopwatchComponent implements OnDestroy {
  protected time = 0;
  protected status: 'idle' | 'running' | 'paused' = 'idle';
  intervalID: number | undefined;

  generateMilliseconds(): number {
    const ms = this.time % 1000;
    return Math.trunc(ms / 10);
  }

  generateSeconds(): number {
    return Math.trunc((this.time / 1000) % 60);
  }

  generateMinutes(): number {
    return Math.trunc(this.time / 1000 / 60);
  }

  padTimeTwoDigits(time: number): string {
    const timeStr = time.toString();

    return timeStr.length < 2 ? `0${timeStr}` : timeStr;
  }

  getFormattedTime(): string {
    const milliseconds = this.padTimeTwoDigits(this.generateMilliseconds());
    const seconds = this.padTimeTwoDigits(this.generateSeconds());
    const minutes = this.padTimeTwoDigits(this.generateMinutes());

    return `${minutes} : ${seconds} : ${milliseconds}`;
  }

  handleStart() {
    if (this.status === 'running') {
      this.status = 'paused';
      return clearInterval(this.intervalID);
    }

    this.status = 'running';
    this.intervalID = setInterval(() => {
      this.time += 50;
    }, 50);
  }

  handleReset(): void {
    this.time = 0;
    this.status = 'idle';
    clearInterval(this.intervalID);
  }

  ngOnDestroy(): void {
    if (this.intervalID) clearInterval(this.intervalID);
  }
}
