import { Component } from '@angular/core';
import { ScoreComponent } from './score/score.component';
import { OptionsComponent } from './options/options.component';
import { StatusComponent } from './status/status.component';

export type StatusType = 'idle' | 'won' | 'draw';

@Component({
  standalone: true,
  selector: 'app-rock-paper',
  templateUrl: './rockPaper.component.html',
  styleUrl: './rockPaper.component.css',
  imports: [ScoreComponent, OptionsComponent, StatusComponent],
})
export class RockPaperComponent {
  protected playerChoice: string | null = '';
  protected cpuChoice: string | null = null;
  protected status: StatusType = 'idle';
}
