/*import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
   
import { PricePipe } from "../pipe/price.pipe";
import{DiscountPipe}from '../discount.pipe'
import { Product } from '../type/product';
import { ProductRequestService } from '../services/product-request.service';
import { CounterService } from '../services/counter.service';
import { CartItem, CartService } from '../services/cart.service';

@Component({
  selector: 'app-detailsproduct',
  imports: [PricePipe,DiscountPipe],
  templateUrl: './detailsproduct.component.html',
  styleUrl: './detailsproduct.component.css'
})
export class DetailsproductComponent {
   products!:Array<Product>;
   productItemservice=inject(ProductRequestService)
   productDetails !:any;
 //activatedRoute=inject(ActivatedRoute);
 @Input()id:string=""
 ngOnInit(){
  //console.log(this.activatedRoute)
  //const params_id=this.activatedRoute.snapshot.params['id'];
  //console.log(params_id);
  //this.productDetails=this.products.find(product=>product.id===Number(this.id))
  this.productItemservice.getProductDetails(Number(this.id))
  .subscribe((response) => this.productDetails = response);
  
  this.counterService
  .getCounter()
  .subscribe((response: number) => this.countervalue = response);
 }

  countervalue:number=0;
  counterService=inject(CounterService);


   decrese(){
     this.counterService.setCounter(this.countervalue-1);
 
   }
   increse(){
     this.counterService.setCounter(this.countervalue+1);
   }



  constructor(private cartService: CartService) {}
   
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
         if (existingItem.quantity < this.carditem.stock) {
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

 
}*/

import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PricePipe } from "../pipe/price.pipe";
import { DiscountPipe } from '../discount.pipe';
import { Product } from '../type/product';
import { ProductRequestService } from '../services/product-request.service';
import { CounterService } from '../services/counter.service';
import { CartItem, CartService } from '../services/cart.service';

@Component({
  selector: 'app-detailsproduct',
  imports: [PricePipe, DiscountPipe],
  templateUrl: './detailsproduct.component.html',
  styleUrl: './detailsproduct.component.css'
})
export class DetailsproductComponent {
  productDetails!: Product;
  activatedRoute = inject(ActivatedRoute);
  productItemservice = inject(ProductRequestService);
  counterService = inject(CounterService);
  countervalue: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    const params_id = this.activatedRoute.snapshot.params['id'];
    this.productItemservice.getProductDetails(Number(params_id))
      .subscribe((response) => this.productDetails = response);

    this.counterService.getCounter()
      .subscribe((response: number) => this.countervalue = response);
  }

  decrese() {
    this.counterService.setCounter(this.countervalue - 1);
  }

  increse() {
    this.counterService.setCounter(this.countervalue + 1);
  }

  addToCart() {
    const cartItem: CartItem = {
      productId: this.productDetails.id,
      productName: this.productDetails.title,
      price: this.productDetails.price,
      quantity: 1,
      images: this.productDetails.images[0],
      stock: this.productDetails.stock
    };

    const existingItem = this.cartService.getCartItems().find(item => item.productId === cartItem.productId);
    if (existingItem) {
      if (existingItem.quantity < this.productDetails.stock) {
        existingItem.quantity++;
      } else {
         alert('Cannot add more, stock limit reached!');
         return;
      }
    } else {
      this.increse();
      this.cartService.addToCart(cartItem, this.productDetails.stock);
    }

    alert(`${this.productDetails.title} added to cart!`);
    console.log('Cart Item:', cartItem);
  }

  isStockLimitReached() {
    const existingItem = this.cartService.getCartItems().find(item => item.productId === this.productDetails.id);
   
    return existingItem ? existingItem.quantity >= this.productDetails.stock : false;
   
  }
}

