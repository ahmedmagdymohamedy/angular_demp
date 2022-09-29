import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiscountOffers } from '../../my-types/discount-offers';
import { ICategory } from '../../my-types/i-category';
import { IProduct } from '../../my-types/i-product';
import { ProductServiceService } from '../../services/product-service.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  discount: DiscountOffers;
  storename: string;
  storeLogo: string;
  productList: IProduct[] = [];
  categoryList: ICategory[];
  clientName: string;
  isPurshased: boolean;

  isNoDiscount: boolean;
  wasBuy: boolean = false;

  constructor(private producService: ProductServiceService, private router: Router) {

    this.discount = DiscountOffers.noDiscount;
    this.storename = 'Megoo Store';
    this.storeLogo = 'assets/megz.png';
    this.categoryList = [{
      id: 0,
      name: "phons",
    }, {
      id: 1,
      name: "cameras",
    }, {
      id: 2,
      name: "Closes",
    },];
    this.clientName = '';
    this.isPurshased = false;

    console.log(this.discount);

    this.isNoDiscount = this.discount == DiscountOffers.noDiscount;

    this.renderValues();
  }


  ngOnInit(): void {

  }


  onClickBuy() {
    this.wasBuy = true;
  }

  renderValues() {
    this.productList = this.producService.getAllProducts()
  }

  goToDetails(id: number) {
    this.router.navigate(['/productDetails', id]);
  }

}
