import { WebSocketService } from './../shared/web-socket.service';
import { Product, ProductService, Comment } from './../shared/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
@Component({
  selector: 'app-prodetails',
  templateUrl: './prodetails.component.html',
  styleUrls: ['./prodetails.component.css']
})
export class ProdetailsComponent implements OnInit {
  // productTitle:string;
  isWatched: boolean = false;
  currentBid: number;
  product: Product;
  comments: Comment[];
  constructor(private routeInfo: ActivatedRoute, private productService: ProductService, private wsServer: WebSocketService) { }

  ngOnInit() {
    // this.productTitle=this.routeInfo.snapshot.params["prodTitle"];
    let productId: number = this.routeInfo.snapshot.params["productId"];
    this.productService.getProduct(productId).subscribe(
      productd => {
        this.product = productd;
        this.currentBid = productd.price;
      }
    );
    this.productService.getCommentsForProductId(productId).subscribe(
      comments => this.comments = comments
    )
  }
  watchProduct() {
    this.isWatched = !this.isWatched;
    this.wsServer.createObservableSaocket("ws://localhost:8085", this.product.id).subscribe(
      products => {
        let product = products.find(p => p.productId === this.product.id);
        this.currentBid = product.bid;
      }
    );
  }

}
