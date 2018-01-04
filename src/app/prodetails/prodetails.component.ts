import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodetails',
  templateUrl: './prodetails.component.html',
  styleUrls: ['./prodetails.component.css']
})
export class ProdetailsComponent implements OnInit {
  productTitle:string;
  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    this.productTitle=this.routeInfo.snapshot.params["prodTitle"];
  }

}
