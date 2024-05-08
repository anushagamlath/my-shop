import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] =[];


  constructor() { }

  addToCart(product: any) {
    let item = this.items.find((i) => i.product.id === product.id);
    if (item) {
      item.quantity++; 
    } else {
      this.items.push({ product: product, quantity: 1 }); 
    }
  }
  getItems(){
    return this.items;
  }
  delete(item: any) {
    this.items = this.items.filter((i) => i.product.id !== item.product.id);
  }
  

  incrementQuantity(id: number){
    let item=this.items.find((i)=> i.product.id === id);
    if (item){
      item.quantity++;
    
    }
  }

  decrementQuantity(id: number){
    let item=this.items.find((i)=> i.product.id === id);
    if (item){
      item.quantity--;
  
    }
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
  }
  


}


