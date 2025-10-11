import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './projectCard.component.html',
  styleUrl: './projectCard.component.css',
  imports: [RouterLink],
})
export class ProjectCardComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) day!: number;
  @Input({ required: true }) image!: string;
}
