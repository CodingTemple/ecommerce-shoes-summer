import { Injectable,Inject, forwardRef } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { take } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { ProdInterface } from '../products/prod-interface';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(@Inject(forwardRef(() => AngularFireDatabase))private db: AngularFireDatabase) { }



  // Create a new Cart inside of Firebase and Specify the time
  create() {
    return this.db.list('shopping-carts').push({
      dateCreated: new Date().getTime()
    })
  }

  async getCart(){
    let cartId = await this.getOrCreateCart()
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

  async addToCart(product:Observable<ProdInterface>, change:number){
    let key
    let cartId = await this.getOrCreateCart();
    let item$ = this.getItem(cartId,product.)
    console.log(key)
        
    item$.snapshotChanges().pipe(take(1)).subscribe(item => {
      key = item.payload.exportVal().$key
      item$.update({product: product, quantity: (item.payload.exportVal().quantity || 0) + 1 });
    })

    // item$.update({product:product.name, quantity: (product.qty || 0) + change})
  }

  private increamentQty(quant_num:number){
    return quant_num + 1
  }



}
