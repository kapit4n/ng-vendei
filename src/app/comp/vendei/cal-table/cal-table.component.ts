import { Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomersDialogComponent } from "../customers-dialog/customers-dialog.component";

enum PaymentType {
    PAYMONEY = 1,
    PAYRETURN = 2,
    DISCOUNT = 3
}

@Component({
  selector: "app-cal-table",
  templateUrl: "./cal-table.component.html",
  styleUrls: ["./cal-table.component.css"]
})
export class CalTableComponent implements OnInit {
  @Input() selectCustomer: Function;
  @Input() selectedCustomer: any;

  bills = [
    { name: "0.1", value: 0.1 },
    { name: "0.2", value: 0.2 },
    { name: "0.5", value: 0.5 },
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "5", value: 5 },
    { name: "10", value: 10 }
  ];

  numbers = [
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
    { name: "7", value: 7 }
  ];

  payItems: Array<any>;

  payedItems: Array<any>;
  discountItems: Array<any>;
  returnItems: Array<any>;

  currentType = "Bs";
  displayCurrentType: boolean;

  payType: PaymentType;

  animal: string;
  name: string;
  
  constructor(public dialog: MatDialog) {
    this.payType = PaymentType.PAYMONEY;
    this.payItems = this.bills;
    this.displayCurrentType = true;
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(CustomersDialogComponent, {
      width: "350px",
      height: "350px",
      data: {
        selectCustomer: this.selectCustomer.bind(this),
        animal: this.animal
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

  ngOnInit() {

  }

  payMoney() {
    this.displayCurrentType = true;
    this.payItems = this.bills;
    this.payType = PaymentType.PAYMONEY;
  }

  discount() {
    this.displayCurrentType = false;
    this.payItems = this.numbers;
    this.payType = PaymentType.DISCOUNT;
  }

  returnMoney() {
    this.payItems = this.bills;
    this.displayCurrentType = true;
    this.payType = PaymentType.PAYRETURN;
  }

  payIt(payItem: PaymentType) {

    switch (payItem) {
      case PaymentType.PAYMONEY:
        this.payedItems.push(payItem);
        break;
      case PaymentType.DISCOUNT:
        this.discountItems.push(payItem);
        break;
      case PaymentType.PAYRETURN:
        this.returnItems.push(payItem);
        break;
      default:
        break;
    }
  }
}
