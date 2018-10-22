import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.css"]
})
export class CustomerListComponent implements OnInit {
  @Input() selectedCustomer: Function;

  searchText: string = "";
  customers = [
    {
      id: 1,
      name: "Luis Arce",
      img: "",
      address: "Cochabamba, 16 de Julio",
      ci: 75757575
    },
    {
      id: 2,
      name: "Hansel Arce",
      img: "",
      address: "Cochabamba, Nestor Salasar 1616",
      ci: 75757575
    }
  ];
  constructor() {}

  ngOnInit() {}

  loadCustomers(){
    console.log("Loocking for " + this.searchText);
  }

  addCustomer(customer) {
    console.log(customer);
  }
}
