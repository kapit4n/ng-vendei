import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";

import { RouterModule, Routes } from "@angular/router";

import { PageNotFoundComponent } from "./pages/vendei/page-not-found/page-not-found.component";
import { MainScreenshotComponent } from "./pages/vendei/main-screenshot/main-screenshot.component";
import { ShoppingCartComponent } from "./pages/vendei/shopping-cart/shopping-cart.component";

import { ProductListComponent } from "./comp/vendei/product-list/product-list.component";
import { CalTableComponent } from "./comp/vendei/cal-table/cal-table.component";
import {
  SelectedListComponent,
  SelectedProductEditDialog
} from "./comp/vendei/selected-list/selected-list.component";
import { CustomerListComponent } from "./comp/vendei/customer-list/customer-list.component";
import { CustomersDialogComponent } from "./comp/vendei/customers-dialog/customers-dialog.component";

import { VProductsService } from "./services/vendei/v-products.service";
import { VCustomersService } from "./services/vendei/v-customers.service";
import { VConfigService } from "./services/vendei/v-config.service";
import { MainComponent } from "./pages/main/main.component";

const appRoutes: Routes = [
  { path: "mock", component: MainScreenshotComponent },
  {
    path: "",
    component: ShoppingCartComponent,
    data: { title: "Shopping Cart" }
  },
  {
    path: "main",
    component: MainComponent,
    data: { title: "Main" }
  },
  {
    path: "customers",
    component: CustomerListComponent,
    data: { title: "Customers" }
  },
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  },
  { path: "**", component: PageNotFoundComponent }
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
    SelectedListComponent,
    SelectedProductEditDialog,
    CustomerListComponent,
    CustomersDialogComponent,
    MainComponent
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
    MatTableModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [VProductsService, VCustomersService, VConfigService],
  bootstrap: [AppComponent],
  entryComponents: [SelectedProductEditDialog, CustomersDialogComponent]
})
export class AppModule {}
