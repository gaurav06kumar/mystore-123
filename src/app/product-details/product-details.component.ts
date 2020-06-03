import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';   
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(     
    private route: ActivatedRoute,
    private cartService: CartService   //Inject the cart service by adding it to the constructor().
  
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];      // fetch the product based on the productId.
  });
  }

  addToCart(product) {
    this.cartService.addToCart(product);//Uses the cart service's addToCart() method to add the product the cart.
    window.alert('Your product has been added to the cart!'); //Displays a message hwen you click on buy button .
  }

}