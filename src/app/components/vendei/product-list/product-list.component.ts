import { Component, OnInit } from '@angular/core';
import { VProductListService } from '../../../services/vendei/v-product-list.service'

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products = [];
  constructor(private pListSvc: VProductListService) {}

  ngOnInit() {
    this.pListSvc.getProducts().subscribe(res => this.products = res);
  }

  addProduct(product: any) {
    console.log(product);
  }
}
