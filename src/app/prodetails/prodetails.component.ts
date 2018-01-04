import { Product, ProductService, Comment } from './../shared/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodetails',
  templateUrl: './prodetails.component.html',
  styleUrls: ['./prodetails.component.css']
})
export class ProdetailsComponent implements OnInit {
  // productTitle:string;
  product:Product;
  comments:Comment[];
  constructor(private routeInfo:ActivatedRoute,private productService:ProductService) { }

  ngOnInit() {
    // this.productTitle=this.routeInfo.snapshot.params["prodTitle"];
    let productId:number=this.routeInfo.snapshot.params["productId"];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }

}
