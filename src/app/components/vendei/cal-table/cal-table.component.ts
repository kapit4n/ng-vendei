import { Component, OnInit } from "@angular/core";


enum PaymentType {
    PAYMONEY = 1,
    PAYRETURN,
    DISCOUNT
}

@Component({
  selector: "app-cal-table",
  templateUrl: "./cal-table.component.html",
  styleUrls: ["./cal-table.component.css"]
})
export class CalTableComponent implements OnInit {
  bills = [{ name: "0.1", value: 0.1 },{ name: "0.2", value: 0.2 }, { name: "0.5", value: 0.5 }
    , { name: "1", value: 1 }, { name: "2", value: 2 }, { name: "5", value: 5 }, { name: "10", value: 10 }];
  numbers = [{ name: "1", value: 1 },{ name: "2", value: 2 }, { name: "3", value: 3 }
    , { name: "4", value: 4 }, { name: "5", value: 5 }, { name: "6", value: 6 }, { name: "7", value: 7 }];
  
  payItems: Array<any>;
  
  currentType = "Bs";
  displayCurrentType: boolean;

  payType: PaymentType;

  constructor() {
    this.payType = PaymentType.PAYMONEY;
    this.payItems = this.bills;
    this.displayCurrentType = true;
  }
  
  ngOnInit() {}
  
  payMoney() {
    this.displayCurrentType = true;
    this.payItems = this.bills;
    
  }
  
  discount() {
    this.displayCurrentType = false;
    this.payItems = this.numbers;
  }
  
  returnMoney() {
    this.payItems = this.bills;
    this.displayCurrentType = true;

  }

  payIt(payItem: any) {}
}
