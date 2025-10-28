import { Component } from '@angular/core';
import { ResultsComponent } from './results/results.component';
import { SearchBarComponent } from './searchBar/searchBar.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  standalone: true,
  selector: 'app-dynamic-list',
  templateUrl: './dynamicListFilter.component.html',
  imports: [SearchBarComponent, ResultsComponent, HeaderComponent],
})
export class DynamicListFilter {}
