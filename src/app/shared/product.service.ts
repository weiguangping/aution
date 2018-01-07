import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { URLSearchParams } from '@angular/http';
@Injectable()
export class ProductService {
  searchEvent: EventEmitter<PeoductSearchParams>=new EventEmitter();
  constructor(private http:Http) { }
  getProducts():Observable<Product[]> {
    return this.http.get("api/products").map(res=>res.json());
  }
  getAllCategories():string[]{
    return ["分类1","分类2","分类3"];
  }
  getProduct(id: number): Observable<Product>{
    return this.http.get("api/products/"+id).map(res => res.json());
  }
  getCommentsForProductId(id: number): Observable<Comment[]>{
    return this.http.get("api/products/" + id +"/comments").map(res => res.json());
  }
  search(params: PeoductSearchParams): Observable<Product[]>{
    return this.http.get("api/products" ,{search:this.encodeParams(params)}).map(res => res.json());
  }
  private encodeParams(params: PeoductSearchParams){
    return Object.keys(params).filter(key=>params[key]).reduce((sum:URLSearchParams,key:string)=>{
      sum.append(key,params[key]);
      return sum;
    },new URLSearchParams());
  }
}
export class PeoductSearchParams{
  constructor(
    public title:string,
    public price:number,
    public caregory:string
  ){}
}
export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories: string,
    public src:string
  ){

  }
}
export class Comment{
  constructor(
    public id:number,
    public productId:number,
    public timestamp:string,
    public user:string,
    public rating:number,
    public content:string
  ){}
}

