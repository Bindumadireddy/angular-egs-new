import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent  {

  constructor() { }

  ngOnInit() {
  }
  display:any="The product has been shared";
  array:any=[];
  
  details:any;
  products:any=[{name:"Phone XL",description:"A large phone with one of the best screen",price:700},
  {name:"Phone Mini",description:"A great phone with best camera",price:600},
  {name:"Phone Standard",description:"A good phone with best features",price:800}];
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


