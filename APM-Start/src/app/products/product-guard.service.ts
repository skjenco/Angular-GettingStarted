import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class ProductGuardService  implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    let id = +route.url[1].path; //the the first parameter on the url /provider/:id  the + in front converts to a number
    if(isNaN(id)|| id<1){
      alert('bad id');
      this._router.navigate(['/products']);
      return false;  //don't allow the route to go through
    }
    return true;
  }

  constructor(private _router : Router) {

  }

}
