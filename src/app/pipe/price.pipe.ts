import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {
  private exchangeRate: number = 60;

  transform(value: number, rate?: number): string {
    if (!value) return '0 EGP';
    
    const conversionRate = rate || this.exchangeRate; 
    const convertedValue = value * conversionRate;

    return `${convertedValue.toFixed(2)} EGP`;
  }

}
