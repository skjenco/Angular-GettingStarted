

import {Injectable} from "@angular/core";
import {IProduct} from "./Product";
import {HttpClient, HttpErrorResponse, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

@Injectable()
export class ProductService  {

  private _productUrl = "./api/products/products.json";

  constructor(private _http : HttpClient){

  }
  getProducts() : Observable<IProduct[]> {
    return this._http.get<IProduct>(this._productUrl)
      .do(this.handleDo)
      .catch(this.handleError);
  }
  private handleDo(event)  {
    console.log("Returned Data = " + JSON.stringify(event));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
