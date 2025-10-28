import { Injectable } from '@angular/core';
import { IProject } from '../../shared/models/project.model';
import { ProfileCardComponent } from './components/day1-profileCard/profileCard.component';
import { CounterComponent } from './components/day2-counter/counter.component';
import { TodoListComponent } from './components/day3-todoList/todoList.component';
import { StopwatchComponent } from './components/day4-stopwatch/stopwatch.component';
import { GuessNumberComponent } from './components/day5-guessNumber/guessNumber.component';
import { TicTacToeComponent } from './components/day6-ticTacToe/ticTacToe.component';
import { DynamicListFilter } from './components/day7-dynamic-list-filter/dynamicListFilter.component';

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
      image: 'images/todo.png',
      component: TodoListComponent,
    },
  ],
  [
   4,
    {
      name: 'Stopwatch',
      day: 4,
      image: 'images/stopwatch.png',
      component: StopwatchComponent,
    },
  ],
  [
   5,
    {
      name: 'Guess the number',
      day: 5,
      image: 'images/guess-number.png',
      component: GuessNumberComponent,
    },
  ],
  [
   6,
    {
      name: 'Tic tac toe',
      day: 6,
      image: 'images/tic-tac-toe.png',
      component: TicTacToeComponent,
    },
  ],
  [
   7,
    {
      name: 'Dynamic list filter',
      day: 7,
      image: 'images/dynamic-list.png',
      component: DynamicListFilter,
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
