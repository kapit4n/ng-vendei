import { Component, OnInit } from '@angular/core';
import { VProductListService } from '../../../services/vendei/v-product-list.service'

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products = [
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
    },
    {
      id: 600,
      name: "Radio",
      img: "https://www.clasohlson.com/medias/sys_master/9507317350430.jpg"
    },
    {
      id: 600,
      name: "DVD Reader",
      img:
        "https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/5e7f9c9f-4fcc-4c17-82e5-3e723a9c89ee.jpg._CB323335399_.jpg"
    },
    {
      id: 600,
      name: "Monitor",
      img:
        "https://www.lg.com/us/images/monitors/md05771107/gallery/medium01.jpg"
    },
    {
      id: 600,
      name: "ASUS",
      img:
        "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/8/8/889349100943_2.png"
    },
    {
      id: 600,
      name: "Cooler",
      img:
        "https://lojamultilaser.vteximg.com.br/arquivos/ids/155988-1000-1000/AC267_1.jpg"
    },
    {
      id: 600,
      name: "Drone",
      img: "https://i.ebayimg.com/images/g/xxgAAOSwY4taxIyC/s-l300.jpg"
    },
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
    },
    {
      id: 600,
      name: "Radio",
      img: "https://www.clasohlson.com/medias/sys_master/9507317350430.jpg"
    },
    {
      id: 600,
      name: "DVD Reader",
      img:
        "https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/5e7f9c9f-4fcc-4c17-82e5-3e723a9c89ee.jpg._CB323335399_.jpg"
    },
    {
      id: 600,
      name: "Monitor",
      img:
        "https://www.lg.com/us/images/monitors/md05771107/gallery/medium01.jpg"
    },
    {
      id: 600,
      name: "ASUS",
      img:
        "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/8/8/889349100943_2.png"
    },
    {
      id: 600,
      name: "Cooler",
      img:
        "https://lojamultilaser.vteximg.com.br/arquivos/ids/155988-1000-1000/AC267_1.jpg"
    },
    {
      id: 600,
      name: "Drone",
      img: "https://i.ebayimg.com/images/g/xxgAAOSwY4taxIyC/s-l300.jpg"
    },
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
    },
    {
      id: 600,
      name: "Radio",
      img: "https://www.clasohlson.com/medias/sys_master/9507317350430.jpg"
    },
    {
      id: 600,
      name: "DVD Reader",
      img:
        "https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/5e7f9c9f-4fcc-4c17-82e5-3e723a9c89ee.jpg._CB323335399_.jpg"
    },
    {
      id: 600,
      name: "Monitor",
      img:
        "https://www.lg.com/us/images/monitors/md05771107/gallery/medium01.jpg"
    },
    {
      id: 600,
      name: "ASUS",
      img:
        "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/8/8/889349100943_2.png"
    },
    {
      id: 600,
      name: "Cooler",
      img:
        "https://lojamultilaser.vteximg.com.br/arquivos/ids/155988-1000-1000/AC267_1.jpg"
    },
    {
      id: 600,
      name: "Drone",
      img: "https://i.ebayimg.com/images/g/xxgAAOSwY4taxIyC/s-l300.jpg"
    }
  ];
  constructor(private pListSvc: VProductListService) {}

  ngOnInit() {
    this.pListSvc.getProducts().subscribe(res => console.log(res));
  }
}
