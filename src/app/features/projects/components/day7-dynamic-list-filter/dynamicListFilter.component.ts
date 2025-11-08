import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ResultsComponent } from './results/results.component';
import { SearchBarComponent } from './searchBar/searchBar.component';

const DUMMY_COURSES = [
  'Introduction to Angular',
  'Modern React Development',
  'Advanced JavaScript (ES2023)',
  'TypeScript Fundamentals',
  'Frontend Application Architecture',
  'UI Design with Figma',
  'CSS Mastery and Animations',
  'Backend Development with Node.js',
  'Database Design with PostgreSQL',
  'Building APIs with REST and GraphQL',
  'Unit Testing with Jest',
  'Docker and Kubernetes Essentials',
  'Version Control with Git and GitHub',
  'Data Science for Beginners',
  'Machine Learning with Python',
  'Automation with Bash and Shell Scripting',
  'Mobile App Development with Flutter',
  'Web Application Security',
  'Performance Optimization in Angular',
  'Scalable System Design',
];

@Component({
  standalone: true,
  selector: 'app-dynamic-list',
  templateUrl: './dynamicListFilter.component.html',
  imports: [SearchBarComponent, ResultsComponent, HeaderComponent],
})
export class DynamicListFilter {
  private _allResults: string[] = DUMMY_COURSES;
  protected query: string = '';

  protected get results(): string[] {
    return this._allResults.filter((r) =>
      r.trim().toLowerCase().includes(this.query.trim().toLowerCase())
    );
  }

  protected handleSearch(query: string): void {
    this.query = query;
  }
}
