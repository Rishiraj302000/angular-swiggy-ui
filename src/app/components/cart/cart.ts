import { Component } from '@angular/core';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {
  constructor(public cartService: CartService) {}
}