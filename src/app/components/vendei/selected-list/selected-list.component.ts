import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-selected-list",
  templateUrl: "./selected-list.component.html",
  styleUrls: ["./selected-list.component.css"]
})
export class SelectedListComponent implements OnInit {
  constructor() {}

  products: any[] = [
    {
      id: 600,
      name: "Cellphone",
      img:
        "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAyMC83NzIvb3JpZ2luYWwvaXBob25lLTAyLmpwZw=="
    },
    {
      id: 600,
      name: "TV",
      img:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5900/5900135_sd.jpg;maxHeight=640;maxWidth=550"
    },
    {
      id: 600,
      name: "Camera",
      img:
        "https://rukminim1.flixcart.com/image/312/312/camera/j/s/u/canon-eos-1300d-dslr-original-imaeh33eyhy9gcgm.jpeg?q=70"
    },
    {
      id: 600,
      name: "Laptop",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/61aZwj3rIyL._SX425_.jpg"
    },
    {
      id: 600,
      name: "Tablet",
      img:
        "https://assets.pcmag.com/media/images/466265-amazon-fire-hd-10.jpg?width=810&height=456"
    }
  ];
  ngOnInit() {}

  selectedItem(product: any) {
    console.log(product);
  }
}
