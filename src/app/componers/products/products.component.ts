import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/Models/store';
import { IProduct } from 'src/app/Models/iproduct';
import { DiscountOffers } from 'src/app/Models/discount-offers';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  ClientName:string=""
  // interface
   ProductList:IProduct[];
  //enum
  // discount:DiscountOffers=DiscountOffers.No_Discount
  discount:DiscountOffers=DiscountOffers['10%']


// class
  clStore:Store;

  constructor() {
    this.ProductList=[{ id:1,
      name:"dell",
      Quantity:2,
      price:400000,
      img:"assets/download.png",
      CateogryID:2

    },{ id:2,
      name:"hp",
      Quantity:0,
      price:420000,
      CateogryID:2
    }]
    this.discount;
    this.clStore=new Store("ITI",["alex","caeio"],"assets/download.png",DiscountOffers.No_Discount)
   }
  ngOnInit(): void {
  }

}
