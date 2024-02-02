import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

//Initiates application, created by Angular framework 

@Component({
  selector: 'app-root',
  template: `
    <app-header [cart]="cart"></app-header>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };
  registrationForm = new FormGroup({
    userMessage: new FormControl('')
  });

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
}

}
