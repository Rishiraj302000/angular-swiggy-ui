import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class Categories {
  categories = [
    'Biryani',
    'Pizza',
    'Burger',
    'Dosa',
    'Chinese',
    'North Indian',
    'Rolls',
    'Desserts'
  ];
}