import { Component, inject } from '@angular/core';
import { CardComponent } from "../card/card.component";

import { ProductRequestService } from '../services/product-request.service';
import { Product } from '../type/product';


@Component({
  selector: 'app-produtlist',
  imports: [CardComponent],
  templateUrl: './produtlist.component.html',
  styleUrl: './produtlist.component.css'
})
export class ProdutlistComponent {
  
  products !:Array<Product>;
  productRequest=inject(ProductRequestService);
  
  ngOnInit(){
    this.productRequest.getProducts()
    .subscribe(
      (response) => this.products = response.products,
      (error: any) => console.log(error)
    )
    }

  receivedFromChild(id:number){
    console.log("from parent",id)
    this.products=this.products.filter((product :Product)=>product.id !== Number(id))
  }
}
