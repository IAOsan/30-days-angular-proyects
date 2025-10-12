import { Injectable } from '@angular/core';
import { IProject } from '../../shared/models/project.model';
import { ProfileCardComponent } from './components/day1-profileCard/profileCard.component';
import { CounterComponent } from './components/day2-counter/counter.component';

const PROJECT_COMPONENTS_MAP = new Map<number, IProject>([
  [
    1,
    {
      name: 'Profile Card',
      day: 1,
      image: 'images/profile-card.png',
      component: ProfileCardComponent,
    },
  ],
  [
    2,
    {
      name: 'Counter',
      day: 2,
      image: 'images/counter.png',
      component: CounterComponent,
    },
  ],
]);

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
