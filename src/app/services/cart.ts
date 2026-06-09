import { Injectable } from '@angular/core';

export interface CartItem {
  name: string;
  priceValue: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];

  addToCart(name: string, priceValue: number): void {
    const existingItem = this.items.find((item) => item.name === name);

    if (existingItem) {
      existingItem.quantity = existingItem.quantity + 1;
    } else {
      this.items.push({
        name: name,
        priceValue: priceValue,
        quantity: 1
      });
    }
  }

  removeFromCart(name: string): void {
    this.items = this.items.filter((item) => item.name !== name);
  }

  clearCart(): void {
    this.items = [];
  }

  getTotalItems(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalAmount(): number {
    return this.items.reduce((total, item) => {
      return total + item.priceValue * item.quantity;
    }, 0);
  }
}