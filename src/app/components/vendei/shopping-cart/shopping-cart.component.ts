import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"]
})
export class ShoppingCartComponent implements OnInit {
  total: number;
  constructor() {
    this.total = 0;
  }

  selectedProducts = [];

  ngOnInit() {}

  public removeProduct(product: any) {
    this.selectedProducts = this.selectedProducts.filter(
      p => p.id != product.id
      );
    this.recalTotal()
  }

  recalTotal() {
    this.total = 0;
    
    this.selectedProducts.forEach(val => {
      this.total += val.price * val.quantity;
    });
  }

}
