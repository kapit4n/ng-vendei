import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"; 

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/vendei/page-not-found/page-not-found.component';

import { MainScreenshotComponent } from './components/vendei/main-screenshot/main-screenshot.component';
import { ProductListComponent } from './components/vendei/product-list/product-list.component';
import { ShoppingCartComponent } from './components/vendei/shopping-cart/shopping-cart.component';
import { CalTableComponent } from './components/vendei/cal-table/cal-table.component';
import { SelectedListComponent } from './components/vendei/selected-list/selected-list.component';
import { VProductListService } from './services/vendei/v-product-list.service';

const appRoutes: Routes = [
  { path: 'mock', component: MainScreenshotComponent },
  {
    path: 'main',
    component: ShoppingCartComponent,
    data: { title: 'Shopping Cart' }
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
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
    ShoppingCartComponent,
    CalTableComponent,
    SelectedListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatTableModule
  ],
  providers: [VProductListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
