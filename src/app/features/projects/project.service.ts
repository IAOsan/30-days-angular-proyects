import { Injectable } from '@angular/core';
import { IProject } from '../../shared/models/project.model';

const PROJECT_COMPONENTS_MAP = new Map<number, IProject>([]);

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getProjectByDay(day: number): IProject | undefined {
    return PROJECT_COMPONENTS_MAP.get(day);
  }

  getAllProjectsMetadata(): Omit<IProject, 'component'>[] {
    return Array.from(PROJECT_COMPONENTS_MAP.values()).map(
      ({ name, day, image }) => ({
        name,
        day,
        image,
      })
    );
  }
}
