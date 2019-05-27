import { Injectable } from '@angular/core';
import { PRODUCTS } from '../products';


@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  products = PRODUCTS;
  product;

  constructor() { }

  getProduct(id: string) {
    return this.product = this.products.find(x => x.id === id);
  }
}
