import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database'
import { ProdInterface } from '../products/prod-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private db: AngularFireDatabase) { }



  // Create a new Cart inside of Firebase and Specify the time
  create() {
    return this.db.list('shopping-carts').push({
      dateCreated: new Date().getTime()
    })
  }

  private getCart(cartId:string){
    return this.db.object('/shopping-carts/' + cartId)
  }

  // Get a cart or Create one if not available

  private async getOrCreateCart():Promise<string>{
    /*
    Look inside the browser localStorage 
    and get the cartId if one exists
    */
    let cartId = localStorage.getItem('cartId')
    if (cartId) return cartId  // If true/exists then return ID

    /* If one does not exist then we create it 
    and store it inside of the localStorage of the browser
    */
    let result = await this.create()  
    localStorage.setItem('cartId', result.key)
    return result.key
      
    
  }

  private getItem(cartId: string, productId: string){
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId)
  }

  async addToCart(product:ProdInterface){
    let quant_num: number = 0;
    let cartId = await this.getOrCreateCart();
    let item$ = this.getItem(cartId,product.name)
    item$.set({product:product, quantity: this.increamentQty(quant_num)})
  }

  private increamentQty(quant_num:number){
    return quant_num + 1
  }



}
