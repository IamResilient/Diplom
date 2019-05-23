import { Component, OnInit } from '@angular/core';

import { Product } from './product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  product: Product =
    {
      age: '10',
      brand: 'Bacardi',
      country: 'США',
      name: 'Ром BACARDI CARTA NEGRA',
      fortress: '40',
      price: '54.36',
      type: 'Черный ром',
      volume: '0.7',
      img: 'http://nsk-dostavka24.website/components/com_jshopping/files/img_products/bacardi-carta-negra.jpg'
    }

  ngOnInit() {}

}
