import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"]
})
export class ShoppingCartComponent implements OnInit {
  total: number;
  const emptyCustomer = { id: 1, name: "None", ci: 0 };

  constructor() {
    this.total = 0;
    this.selectedCustomer = Object.assign({}, emptyCustomer);
  }

  selectedProducts = [];
  selectedCustomer: any = {};

  payedItems = [];
  discountItems = [];
  returnItems = [];

  totalPayed = 0;
  totalDiscount = 0;
  totalReturn = 0;
  toReturn = 0;

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
    this.selectedCustomer = Object.assign({}, emptyCustomer);
    this.selectedProducts = [];
    this.total = 0;
    this.payedItems = [];
    this.discountItems = [];
    this.returnItems = [];

    this.totalPayed = 0;
    this.totalDiscount = 0;
    this.totalReturn = 0;
    this.toReturn = 0;
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
    this.toReturn = (this.totalPayed - this.total) - this.totalReturn;
  }
}
