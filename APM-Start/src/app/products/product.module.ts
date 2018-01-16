import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StarComponent} from "../shared/star.component";
import {ConvertToSpacesPipe} from "../shared/convert-to-spaces.pipe";
import {ProductDetailsComponent} from "./product-details.component";
import {ProductListComponent} from "./product-list.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {WelcomeComponent} from "../home/welcome.component";
import {ProductGuardService} from "./product-guard.service";
import {ProductService} from "./product.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
        {path: 'products', component: ProductListComponent},
        {path: 'products/:id',
          canActivate : [ProductGuardService],
          component: ProductDetailsComponent }
        ]),
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent
  ],
  providers: [ProductService, ProductGuardService]

})
export class ProductModule { }
