import { Component } from '@angular/core';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(public cartService: CartService) {}
}