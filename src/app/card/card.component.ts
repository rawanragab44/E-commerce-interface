/*import { Component ,EventEmitter,inject,Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PricePipe} from '../pipe/price.pipe';
import { CartService, CartItem } from '../services/cart.service';
import { Router,RouterLink } from '@angular/router';
import { Product } from '../type/product';
@Component({
  selector: 'app-card',
  imports: [CommonModule,PricePipe,RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  router=inject(Router)
@Input() carditem!:Product;
@Output() sendToParent=new EventEmitter<number>()
handeledelete(){
  console.log(this.carditem.id)
  this.sendToParent.emit(this.carditem.id)
}
handelRedirectTodetails(){
 this.router.navigate(['/product-details',this.carditem !.id])
}



}*/




//


import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePipe } from '../pipe/price.pipe';
import { CartService, CartItem } from '../services/cart.service';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../type/product';
import { ProductRequestService } from '../services/product-request.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-card',
  imports: [CommonModule, PricePipe, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  router = inject(Router);

  ngOnInit() {

  this.counterService
  .getCounter()
  .subscribe((response: number) => this.countervalue = response);
  }
  countervalue:number=0;
  counterService=inject(CounterService);


     increse(){
      this.counterService.setCounter(this.countervalue+1);}
     decrese(){
       this.counterService.setCounter(this.countervalue-1);

     }


  @Input() carditem!: Product;
  @Output() sendToParent = new EventEmitter<number>();

  constructor(private cartService: CartService) {}

  handeledelete() {
    console.log(this.carditem.id);
    this.sendToParent.emit(this.carditem.id);
  }

  handelRedirectTodetails() {
    this.router.navigate(['/product-details', this.carditem.id]);
  }

  addToCart() {
    const cartItem: CartItem = {
      productId: this.carditem.id,
      productName: this.carditem.title,
      price: this.carditem.price,
      quantity: 1,
      images: this.carditem.images[0],
      stock: this.carditem.stock
    };
    //sheck
    const existingItem = this.cartService.getCartItems().find(item => item.productId === cartItem.productId);
    if (existingItem) {
      // if (existingItem.quantity < this.carditem.stock)
        if (existingItem.quantity < 3) {
        existingItem.quantity++;
 } else {
        alert('Cannot add more, stock limit reached!');
      }
    } else {
     this.increse();
      this.cartService.addToCart(cartItem, this.carditem.stock);
    }
  //

    alert(`${this.carditem.title} added to cart!`);

    console.log('Cart Item:', cartItem);
  }
}



