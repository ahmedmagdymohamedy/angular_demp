import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/my-types/i-product';
import { HtttpService } from 'src/app/services/htttp.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductServiceService) { }
  product: IProduct | null = null;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => {
      this.product = this.productService.getProductById(parseInt(data.get('id') || '0'))
    })
  }

}
