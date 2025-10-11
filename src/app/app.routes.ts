import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProjectsComponent } from './features/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: '30 days of Angular projects' },
  {
    path: 'projects/day',
    children: [{ path: ':day', component: ProjectsComponent }],
  },
  { path: '**', redirectTo: '' },
];
