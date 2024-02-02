import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

//Declaring resources for cart component
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})

//Defining variables for storing cart data
export class CartComponent implements OnInit {
  cart: Cart = { items: []};
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ]

  //Linking to cart service and HTTP client modules
  constructor(private cartService: CartService, private http: HttpClient) { }

  //Load cart service methods and data source on page load
  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
     this.cart = _cart;
     this.dataSource = this.cart.items;
    });
  }

  //Method for returning total items
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items)
  }

  //Empty items from cart
  onClearCart(): void {
    this.cartService.clearCart();
  }

  //Remove an item from the cart
  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  //Increase item quantity
  onAddQuantity(item: CartItem): void{
    this.cartService.addToCart(item);
  }

  //Decrease item quantity
  onRemoveQuantity(item: CartItem): void{
    this.cartService.removeQuantity(item);
  }

  //API call to Stripe to initiate secure payment interface
  onCheckout(): void{
    this.http.post('http://localhost:4242/checkout', {
      items: this.cart.items
    }).subscribe(async(res: any) => {
      let stripe = await loadStripe
      ('STRIPEAPIKEY');
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    });
  }

}
