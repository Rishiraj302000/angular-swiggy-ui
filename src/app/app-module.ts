import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Categories } from './components/categories/categories';
import { RestaurantList } from './components/restaurant-list/restaurant-list';
import { Footer } from './components/footer/footer';
import { CartComponent } from './components/cart/cart';

@NgModule({
  declarations: [App, Header, Hero, Categories, RestaurantList, Footer, CartComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
