import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-list',
  templateUrl: './selected-list.component.html',
  styleUrls: ['./selected-list.component.css']
})
export class SelectedListComponent implements OnInit {

  constructor() { }
  products: any[] = [
    {
      name: 'Product 1',
      cost: 14,
    },
    {
      name: 'Product 2',
      cost: 30,
    },
    {
      name: 'Product 3',
      cost: 50,
    }
  ];
  ngOnInit() {
  }

}
