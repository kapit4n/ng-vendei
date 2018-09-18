import { Component, OnInit, Input } from '@angular/core';
import { VProductListService } from '../../../services/vendei/v-product-list.service'

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  @Input()
  selectedProducts: any[];
  products = [];
  constructor(private pListSvc: VProductListService) {}

  ngOnInit() {
    this.pListSvc.getProducts().subscribe(res => (this.products = res));
  }

  addProduct(product: any) {
    if (this.selectedProducts.some(p => p.id == product.id))  {
      this.selectedProducts.filter(p => p.id == product.id)[0].quantity += 1;
    } else {
      const selectedP = Object.assign({ quantity: 1 }, product);
      this.selectedProducts.push(selectedP);
    }
  }
}
