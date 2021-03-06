import { NgModule } from '@angular/core';
import {ConvertToSpacesPipe} from "../shared/convert-to-spaces.pipe";
import {ProductDetailsComponent} from "./product-details.component";
import {ProductListComponent} from "./product-list.component";
import {RouterModule} from "@angular/router";
import {ProductGuardService} from "./product-guard.service";
import {ProductService} from "./product.service";
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
        {path: 'products', component: ProductListComponent},
        {path: 'products/:id',
          canActivate : [ProductGuardService],
          component: ProductDetailsComponent }
        ]),
    SharedModule,
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailsComponent
  ],
  providers: [ProductService, ProductGuardService]

})
export class ProductModule { }
