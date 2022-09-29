import { Injectable } from '@angular/core';
import { IProduct } from '../my-types/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


  private productList: IProduct[] = [
    {
      id: 0,
      name: "iphone",
      quantity: 28,
      price: 60000,
      img: "assets/me.jpg",
    },
    {
      id: 1,
      name: "tanpet",
      quantity: 15,
      price: 7000,
      img: "assets/me.jpg",
    },
    {
      id: 2,
      name: "nikon",
      quantity: 8,
      price: 12000,
      img: "assets/me.jpg",
    },
    {
      id: 3,
      name: "canoon",
      quantity: 11,
      price: 9000,
      img: "assets/me.jpg",
    },
  ];


  constructor() {
  }

  getAllProducts(): IProduct[] {
    return this.productList;
  }

  getProductById(prdId: number): IProduct | null {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == prdId) {
        return this.productList[i];
      }
    }
    return null;
  }

}
