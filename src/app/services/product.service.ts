import { Injectable,Inject, forwardRef } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database'

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
