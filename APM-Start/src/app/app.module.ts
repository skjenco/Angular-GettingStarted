import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {ConvertToSpacesPipe} from "./shared/convert-to-spaces.pipe";
import {StarComponent} from "./shared/star.component";
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailsComponent } from './products/product-details.component';
import {WelcomeComponent} from "./home/welcome.component";
import {RouterModule} from "@angular/router";
import { ProductGuardService } from './products/product-guard.service';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
          {path: 'products', component: ProductListComponent},
          {path: 'products/:id',
            canActivate : [ProductGuardService],
            component: ProductDetailsComponent },
          {path: 'welcome', component: WelcomeComponent},
          {path: '', redirectTo: 'welcome', pathMatch: 'full'},
          {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
        ],{useHash : false }
                         ),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
