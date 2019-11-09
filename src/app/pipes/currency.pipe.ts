import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(price: number, exchangeRate : number) {
    return Math.round(price / exchangeRate) + `$`;
  }

}
