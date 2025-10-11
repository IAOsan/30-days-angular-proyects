import { Pipe, PipeTransform } from '@angular/core';

function capitalizeWord(word: string): string {
  if (word === '') return word;
  return word[0].toUpperCase() + word.slice(1);
}

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(
    value: string,
    mode: 'first word' | 'all words' = 'first word'
  ): string {
    if (mode === 'first word') return capitalizeWord(value);
    return value.split(' ').map(capitalizeWord).join(' ');
  }
}
