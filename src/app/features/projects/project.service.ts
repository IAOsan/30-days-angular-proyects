import { Injectable } from '@angular/core';
import { IProject } from '../../shared/models/project.model';
import { ProfileCardComponent } from './components/day1-profileCard/profileCard.component';
import { CounterComponent } from './components/day2-counter/counter.component';
import { TodoListComponent } from './components/day3-todoList/todoList.component';

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
  [
    3,
    {
      name: 'Todo List',
      day: 3,
      image: 'images/counter.png',
      component: TodoListComponent,
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
