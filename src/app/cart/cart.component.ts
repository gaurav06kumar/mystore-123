import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { 
    this.checkoutForm = this.formBuilder.group({     //To gather the user's name and address, set the checkoutForm property with a form model containing name and address fields,
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
   
    this.items = this.cartService.clearCart();   // Process checkout data here
    this.checkoutForm.reset();   // empty the cart items  afet purchesing 

    console.warn('Your order has been submitted', customerData);
  }

}