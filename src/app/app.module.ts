import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductListComponent } from './components/vendei/product-list/product-list.component';
import { MainScreenshotComponent } from './components/vendei/main-screenshot/main-screenshot.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/vendei/page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './components/vendei/shopping-cart/shopping-cart.component';

const appRoutes: Routes = [
  { path: 'mock', component: MainScreenshotComponent },
  {
    path: 'main',
    component: ShoppingCartComponent,
    data: { title: 'Shopping Cart' }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    MainScreenshotComponent,
    PageNotFoundComponent,
    ShoppingCartComponent
  ],
  imports: [
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
