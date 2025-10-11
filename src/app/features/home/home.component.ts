import { Component } from '@angular/core';
import { IProject } from '../../shared/models/project.model';
import { ProjectService } from '../projects/project.service';
import { ProjectCardComponent } from './components/projectCard.component/projectCard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ProjectCardComponent],
})
export class HomeComponent {
  projects: Omit<IProject, 'component'>[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getAllProjectsMetadata();
  }
}
