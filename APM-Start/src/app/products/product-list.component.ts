import {Component, OnInit} from '@angular/core';
import {IProduct} from "./Product";
import {ProductService} from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  pageTitle : string = 'Product List!';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage : boolean = false;

  _listFilter : string;
  get listFilter() : string {
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.peformFilter(this.listFilter) : this.products;
  }

  constructor(private _productService: ProductService) {
  }

  peformFilter(filterBy: string) : IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product : IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !==-1);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }


  toggleImage() : void {
    this.showImage = !this.showImage;
  };

  ngOnInit() : void {
    this.products = this._productService.getProducts();
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  filteredProducts : IProduct[];

  products : IProduct[] = [];
}
