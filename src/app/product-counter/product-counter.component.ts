

import { Component, inject, OnInit } from '@angular/core';
import { CartService, CartItem } from '../services/cart.service';
import { PricePipe } from "../pipe/price.pipe";
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './product-counter.component.html',
  imports: [ PricePipe],
})
export class ProductCounterComponent implements OnInit {
  cartItems: CartItem[] = [];

   counterService = inject(CounterService);
    countervalue: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });

    this.counterService.getCounter()
    .subscribe((response: number) => this.countervalue = response);
  }

 
  decrese() {
    this.counterService.setCounter(this.countervalue - 1);
  }

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  increaseQuantity(item: CartItem) {
    // Find the product to get its stock
    const product = this.cartItems.find(p => p.productId === item.productId);
    if (product) {
      if (item.quantity < product.stock) {
        item.quantity++;
      } else {
        alert('Sorry, no more stock available!');
      }
    }
  }
  
  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }
  
  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
    this.decrese();
   
  }

  getStock(productId: number): number {
    const product = this.cartItems.find(p => p.productId === productId);
    return product ? product.stock : 0;
  }






  
}
