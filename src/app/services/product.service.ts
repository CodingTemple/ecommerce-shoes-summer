import { Injectable,Inject, forwardRef } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { ProdInterface } from '../products/prod-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(@Inject(forwardRef(() => AngularFireDatabase))private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product)
  }

  getAll(){
    return this.db.list('/products').valueChanges();
  }
}
