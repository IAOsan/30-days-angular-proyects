import { Type } from '@angular/core';

export interface IProject {
  name: string;
  day: number;
  image: string;
  component: Type<any>;
}
