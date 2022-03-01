import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celciusToFahrenheit'
})
export class ToFahrenheitPipe implements PipeTransform {

  transform(value: number|string, symbol : boolean): string {
    let intvalue: number = parseInt(value.toString());
    if(isNaN(intvalue)) {
      console.error(Error("Valeur non numérique..."));
      return value.toString();
    }
    let result = (intvalue*9/5) + 32;
    if(symbol) return result+ '°F';
    return result.toString();
  }

}
