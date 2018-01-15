import { Component, OnInit } from '@angular/core';

import {IProduct} from "./Product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle : string = 'Product Details';
  product : IProduct;

  constructor(private _route : ActivatedRoute, private _router : Router) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id'); //the plus is a short cut to convert the string to a numeric
    //this.pageTitle += ` : ${id}`


  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
