import { Component, Input } from '@angular/core';
import { MoveOption } from '../rockPaper.component';
import { CapitalizePipe } from '../../../../../shared/pipes/capitalize.pipe';

@Component({
  standalone: true,
  selector: 'app-rock-paper-options',
  templateUrl: './options.component.html',
  styleUrl: './options.component.css',
  imports: [CapitalizePipe]
})
export class OptionsComponent {
  @Input({ required: true }) moves!: MoveOption[];
  @Input({ required: true }) onSelect!: (id: MoveOption['id']) => void;
}
