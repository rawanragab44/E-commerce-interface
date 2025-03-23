/*import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];

  // For reactivity (observable) so all components update together
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  // Add or update item
  addToCart(item: CartItem, stock: number) {
    const existingItem = this.cartItems.find(ci => ci.productId === item.productId);

    if (existingItem) {
      if (existingItem.quantity < stock) {
        existingItem.quantity++;
      } else {
        alert('Stock limit reached!');
      }
    } else {
      this.cartItems.push(item);
    }
    this.cartItemsSubject.next(this.cartItems);
  }

  // Remove item
  removeItem(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.productId !== productId);
    this.cartItemsSubject.next(this.cartItems);
  }

  // Change quantity
  updateQuantity(productId: number, quantity: number, stock: number) {
    const item = this.cartItems.find(ci => ci.productId === productId);
    if (item) {
      if (quantity <= stock && quantity >= 1) {
        item.quantity = quantity;
      } else if (quantity > stock) {
        item.quantity = stock;
        alert('Cannot exceed stock!');
      }
    }
    this.cartItemsSubject.next(this.cartItems);
  }

  // Get total price
  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  // Clear cart (optional)
  clearCart() {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }
}

