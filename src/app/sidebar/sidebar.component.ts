import { ProductService } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl}from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  formModel: FormGroup;
  categories:string[];
  constructor(private productService:ProductService) { 
    let fb=new FormBuilder();
    this.formModel=fb.group({
      title:['',Validators.minLength(3)],
      price: [null, this.positiveNumberValidator],
      category:["-1"]
    })
  }
  ngOnInit() {
    this.categories=this.productService.getAllCategories();
  }
  positiveNumberValidator(control:FormControl):any{
    if(!control.value){
      return null;
    }
    let price=parseInt(control.value);
    if(price>0){
      return null;
    }else{
      return {positiveNumber:true};
    }
  }
  onSearch(){
    if(this.formModel.valid){
      console.log(this.formModel.value);
      this.productService.searchEvent.emit(this.formModel.value);
    }
  }

}
