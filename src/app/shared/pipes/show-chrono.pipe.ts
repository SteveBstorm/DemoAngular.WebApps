import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showChrono'
})
export class ShowChronoPipe implements PipeTransform {

  transform(value: number): string {
    let minutes : number = Math.floor(value/60);
    let secondes : number = value % 60;

    return `${(minutes < 10)?'0'+minutes : minutes} minutes ${(secondes < 10)?'0'+secondes : secondes} secondes`;
  }

}
