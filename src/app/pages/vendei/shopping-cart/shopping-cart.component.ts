import { Component, OnInit } from "@angular/core";
import { VOrdersService } from '../../../services/vendei/v-orders.service'

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"]
})
export class ShoppingCartComponent implements OnInit {
  total: number;
  emptyCustomer = { id: 1, name: "Anonimous", ci: 1234567 };

  constructor(private ordersSvc: VOrdersService) {
    this.total = 0;
    this.selectedCustomer = Object.assign({}, this.emptyCustomer);
  }

  selectedProducts = [];
  selectedCustomer: any;

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

    let order = {} as any;
    console.log(this.selectedCustomer);
    order.customerId = this.selectedCustomer.id;
    order.createdDate = new Date();
    order.total = this.total;
    order.description = "";
    order.paid = true;
    order.delivered = true;
    order.deliveryDate = new Date();

    let details = [];
    this.selectedProducts.forEach(p => {
      let detail = {} as any;
      detail.quantity = p.quantity;
      detail.price = p.price;
      detail.discount = 0;
      detail.totalPrice = Number(p.quantity) * Number(p.price);
      detail.productId = p.id;
      detail.orderId = "0";
      details.push(detail);
    })
    let orderAux = {} as any;
    setTimeout(() => {
      this.ordersSvc.save(order).subscribe(o => {
        details.forEach(d => {
          d.orderId = order.id;
          this.ordersSvc.saveDetail(d).subscribe(ds => {
            console.log(ds);
          })
        });
      });
    }, 800);

    this.selectedCustomer = Object.assign({}, this.emptyCustomer);
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
