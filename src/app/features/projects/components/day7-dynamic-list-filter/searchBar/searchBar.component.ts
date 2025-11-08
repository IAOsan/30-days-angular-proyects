import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';

interface IForm {
  query: FormControl<string>;
}
const DEBOUNCE_TIME = 400;

@Component({
  standalone: true,
  selector: 'dynamic-list-search-bar',
  templateUrl: './searchBar.component.html',
  imports: [ReactiveFormsModule],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Input({ required: true }) onSearch!: (query: string) => void;
  protected searchForm: FormGroup;
  private _valueChangesSubscription: Subscription | undefined;

  constructor(private fb: NonNullableFormBuilder) {
    this.searchForm = this.fb.group<IForm>({
      query: fb.control(''),
    });
  }

  ngOnInit(): void {
    this._valueChangesSubscription = this.searchForm
      .get('query')
      ?.valueChanges
      .pipe(debounceTime(DEBOUNCE_TIME))
      .subscribe((value) => {
        this.onSearch(value);
      });
  }

  ngOnDestroy(): void {
    this._valueChangesSubscription?.unsubscribe();
  }
}
