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
  private intervalID: number | undefined;

  private generateMilliseconds(): number {
    const ms = this.time % 1000;
    return Math.trunc(ms / 10);
  }

  private generateSeconds(): number {
    return Math.trunc((this.time / 1000) % 60);
  }

  private generateMinutes(): number {
    return Math.trunc(this.time / 1000 / 60);
  }

  private padTimeTwoDigits(time: number): string {
    const timeStr = time.toString();

    return timeStr.length < 2 ? `0${timeStr}` : timeStr;
  }

  protected get formattedTime(): string {
    const milliseconds = this.padTimeTwoDigits(this.generateMilliseconds());
    const seconds = this.padTimeTwoDigits(this.generateSeconds());
    const minutes = this.padTimeTwoDigits(this.generateMinutes());

    return `${minutes} : ${seconds} : ${milliseconds}`;
  }

  protected handleStart(): void {
    if (this.status === 'running') {
      this.status = 'paused';
      return clearInterval(this.intervalID);
    }

    this.status = 'running';
    this.intervalID = setInterval(() => {
      this.time += 50;
    }, 50);
  }

  protected handleReset(): void {
    this.time = 0;
    this.status = 'idle';
    clearInterval(this.intervalID);
  }

  ngOnDestroy(): void {
    if (this.intervalID) clearInterval(this.intervalID);
  }
}
