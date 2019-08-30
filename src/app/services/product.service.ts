import { Injectable,Inject, forwardRef } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { ProdInterface } from '../products/prod-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(@Inject(forwardRef(() => AngularFireDatabase))private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product)
  }

  getAll(): ProdInterface{
    return this.db.list<ProdInterface>('/products').valueChanges<ProdInterface>();
  }
}
