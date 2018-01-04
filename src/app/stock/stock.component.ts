import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor() { }
  private pro=[];
 
  ngOnInit() {
    this.pro = [{ name: 1, det: '商品1', price: '1', src: 'http://placehold.it/300x300' }, { name: 1, det: '商品1', price: '1', src: 'http://placehold.it/300x300' }, { name: 1, det: '商品1', price: '1', src: 'http://placehold.it/300x300' }, { name: 1, det: '商品1', price: '1', src: 'http://placehold.it/300x300' }, { name: 1, det: '商品1', price: '1', src: 'http://placehold.it/300x300' }, { name: 1, det: '商品1', price: '1', src: 'http://placehold.it/300x300' }];
  }

}
