import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTime',
})
export class CustomTimePipe implements PipeTransform {
  transform(value: string, character: string): string {
    return value.replace(character, 'h');
  }
}
