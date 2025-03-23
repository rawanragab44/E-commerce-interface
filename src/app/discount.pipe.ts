import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(price: number, discount: number = 0): string {
    let exchangeRate: number = 60;
    let Priceindolarr = (price * discount / 100);
    const finalPrice = Priceindolarr * exchangeRate;

 return `${finalPrice.toFixed(2)} EGP`;
  }

}
