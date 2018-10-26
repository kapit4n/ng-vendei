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
    this.selectedCustomer = { id: 1, name: "None", ci: 0 };
  }

  selectedProducts = [];
  selectedCustomer: any = {};

  payedItems = [];
  discountItems = [];
  returnItems = [];

  totalPayed = 0;
  totalDiscount = 0;
  totalReturn = 0;

  ngOnInit() {}

  public removeProduct(product: any) {
    this.selectedProducts = this.selectedProducts.filter(
      p => p.id != product.id
    );
    this.recalTotal();
  }

  recalTotal() {
    this.total = 0;
    this.selectedProducts.forEach(val => {
      this.total += val.price * val.quantity;
    });
  }

  submitOrder() {
    this.selectedCustomer = { name: "None", ci: 0 };
    this.selectedProducts = [];
    this.total = 0;
    this.payedItems = [];
    this.discountItems = [];
    this.returnItems = [];

  }

  public selectCustomer(customer: any) {
    this.selectedCustomer = customer;
  }

  public calTotals() {
    this.totalPayed = this.payedItems
      .map(x => x.value)
      .reduce((a, b) => a + b, 0);

    this.totalReturn = this.returnItems
      .map(x => x.value)
      .reduce((a, b) => a + b, 0);

    this.totalDiscount = this.discountItems
      .map(x => x.value)
      .reduce((a, b) => a + b, 0);
  }
}