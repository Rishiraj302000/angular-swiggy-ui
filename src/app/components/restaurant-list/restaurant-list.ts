import { Component } from '@angular/core';
import { CartService } from '../../services/cart';

interface Restaurant {
  name: string;
  cuisine: string;
  rating: number;
  time: string;
  price: string;
  priceValue: number;
  image: string;
}

@Component({
  selector: 'app-restaurant-list',
  standalone: false,
  templateUrl: './restaurant-list.html',
  styleUrl: './restaurant-list.css'
})
export class RestaurantList {
  constructor(private cartService: CartService) {}

  restaurants: Restaurant[] = [
    {
      name: 'Paradise Biryani',
      cuisine: 'Biryani, Mughlai, North Indian',
      rating: 4.4,
      time: '30-35 mins',
      price: '₹300 for two',
      priceValue: 300,
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=600'
    },
    {
      name: 'Dominos Pizza',
      cuisine: 'Pizza, Fast Food, Beverages',
      rating: 4.2,
      time: '25-30 mins',
      price: '₹400 for two',
      priceValue: 400,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600'
    },
    {
      name: 'Burger King',
      cuisine: 'Burgers, Fries, Beverages',
      rating: 4.1,
      time: '20-25 mins',
      price: '₹250 for two',
      priceValue: 250,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600'
    },
    {
      name: 'Dosa Plaza',
      cuisine: 'South Indian, Breakfast',
      rating: 4.5,
      time: '20-30 mins',
      price: '₹200 for two',
      priceValue: 200,
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600'
    },
    {
      name: 'Chinese Wok',
      cuisine: 'Chinese, Momos, Noodles',
      rating: 4.0,
      time: '35-40 mins',
      price: '₹350 for two',
      priceValue: 350,
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600'
    },
    {
      name: 'Sweet Truth',
      cuisine: 'Desserts, Cakes, Ice Cream',
      rating: 4.3,
      time: '25-35 mins',
      price: '₹300 for two',
      priceValue: 300,
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600'
    }
  ];

  orderNow(restaurant: Restaurant): void {
    this.cartService.addToCart(restaurant.name, restaurant.priceValue);
    alert(restaurant.name + ' added to cart');
  }
}