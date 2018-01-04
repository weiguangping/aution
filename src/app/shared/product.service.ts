import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products:Product[] = [
    new Product(1, "第1个商品", 1.99, 3.5, "这是第1个商品,是我学习的时候使用的", "分类1","http://placehold.it/800x300"),
    new Product(2, "第2个商品", 1.99, 3.5, "这是第2个商品,是我学习的时候使用的", "分类2","http://placehold.it/800x300"),
    new Product(3, "第3个商品", 1.99, 3.5, "这是第3个商品,是我学习的时候使用的", "分类3","http://placehold.it/800x300"),
    new Product(4, "第4个商品", 1.99, 3.5, "这是第4个商品,是我学习的时候使用的", "分类4","http://placehold.it/800x300"),
    new Product(5, "第5个商品", 1.99, 3.5, "这是第5个商品,是我学习的时候使用的", "分类5","http://placehold.it/800x300"),
    new Product(6, "第6个商品", 1.99, 3.5, "这是第6个商品,是我学习的时候使用的", "分类6","http://placehold.it/800x300"),
  ];
  private comments:Comment[]=[
    new Comment(1,1,"2017-02-02 22:22:22","张三",3,"东西不错"),
    new Comment(2,2,"2017-02-02 22:22:22","李四",4,"东西不错"),
    new Comment(3,3,"2017-09-02 22:22:22","王五",2,"东西不错"),
    new Comment(4,4,"2017-04-02 22:22:22","赵六",1,"东西不错"),
    new Comment(5,5,"2017-05-02 22:22:22","马七",5,"东西不错"),
  ];
  getProducts() {
    return this.products;
  }
  constructor() { }
  
  getProduct(id:number):Product{
    return this.products.find((product)=>product.id==id);
  }
  getCommentsForProductId(id:number):Comment[]{
    return this.comments.filter((comment:Comment)=>comment.productId==id);
  }
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

