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
  originalP = [];
  categories = [{id: 0, name: "All"},{id: 1, name: "Gatgets"}, {id: 2, name: "TVs"}, { id: 3, name: "Computer" }]
  
  constructor(private pListSvc: VProductListService) {}

  ngOnInit() {
    this.pListSvc.getProducts().subscribe(res => {
      this.products = res;
      this.originalP = res;
    });
  }

  addProduct(product: any) {
    if (this.selectedProducts.some(p => p.id == product.id))  {
      this.selectedProducts.filter(p => p.id == product.id)[0].quantity += 1;
    } else {
      const selectedP = Object.assign({ quantity: 1 }, product);
      this.selectedProducts.push(selectedP);
    }
  }

  public filterByCategory(cat: any) {
    if (cat.id > 0) {
      this.products = this.originalP.filter(p => p.categoryId == cat.id);
    } else {
      this.products = this.originalP;
    }

  }

}
