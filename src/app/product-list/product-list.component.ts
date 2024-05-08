import { Component,inject,EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Output() showCart: EventEmitter<boolean> = new EventEmitter<boolean>();
  cartService = inject(CartService);
  products: any[]=[
    {id:1, name:'Todler Room Sets', price: 3500, imgUrl :'assets/todlerroomset.jpg'},
    {id:2, name:'Bed Room Sets', price: 12750,imgUrl :'assets/bedroomset.jpg'},
    {id:3, name:'Bathroom Sets', price: 5300,imgUrl :'assets/bathroomset.png'},
    {id:4, name:'Kitchen Sets', price: 17000, imgUrl :'assets/kitchenset.png'},
  ];
    addToCart(product: any){
      this.cartService.addToCart(product)
      this.showCart.emit(true);
    }
    checkout() {
      
      if (this.cartService.getItems().length > 0) {
        
      }
    }
}
