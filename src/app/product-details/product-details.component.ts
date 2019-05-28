import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';


import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

import { ProductDetailsService } from './product-details.service';
import { Product } from './product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private service: ProductDetailsService
  ) {}

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.service.getProduct(id);
  }
}
