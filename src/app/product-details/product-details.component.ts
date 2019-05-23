import { Component, OnInit } from '@angular/core';

import { PRODUCTS } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  products = PRODUCTS;
  product;
  constructor() { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.product = this.products.find(x => x.id === '1');
  }
}
