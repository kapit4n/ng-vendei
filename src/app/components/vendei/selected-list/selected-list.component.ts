import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-selected-list",
  templateUrl: "./selected-list.component.html",
  styleUrls: ["./selected-list.component.css"]
})
export class SelectedListComponent implements OnInit {
  constructor() {}

  @Input()
  selectedProducts: any[];
  ngOnInit() {}

  selectedItem(product: any) {
    console.log(product);
  }
}
