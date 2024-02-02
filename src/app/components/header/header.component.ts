import { Component, Input, } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

//Defining resources for App-Header Component
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})

//Declaring variables for storing cart items and quantities
export class HeaderComponent {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current , 0);
  }

  constructor(private cartService: CartService) { }

  //Method for finding all items in cart
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }
  
  //Empty items from cart
  onClearCart() {
    this.cartService.clearCart();
  }

}
 