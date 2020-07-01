import { Component, OnInit } from '@angular/core';
// import { IProducts } from './products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private ps: ProductsService){}

  productRows: any[];

  ngOnInit() {
    this.ps.getProducts().subscribe(data => this.productRows = data);
  }

  clickButton(name,model,price){
    alert("คุณซื้อ "+name+" ขนม "+model+" ราคา "+price+" บาท");
  }

}
