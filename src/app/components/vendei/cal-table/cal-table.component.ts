import { Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomersDialogComponent } from "../customers-dialog/customers-dialog.component";

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
  @Input() selectedCustomer: any;
  @Output() selectedCustomerChange: EventEmitter<any> = new EventEmitter<any>;

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
      width: '250px',
      data: { selectedCustomer: this.selectCustomer, selectCustomer: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
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

  public selectCustomer(customer: any) {
    console.log(customer);
    console.log(this.selectedCustomer);
    this.selectedCustomer = customer;
    console.log(this.selectedCustomer);
  }

  payIt(payItem: any) {}
}
