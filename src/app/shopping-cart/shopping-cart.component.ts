import { Component, OnInit, Input } from '@angular/core';
import { Injectable, Inject, forwardRef } from '@angular/core';
import { CartService } from '../services/cart.service';
import { HttpService } from '../services/http.service';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';

// Import for Products Interface
// import {ProdInterface} from './prod-interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

    cart$;

    constructor( @Inject(forwardRef( () => CartService))private shoppingCartService: CartService, @Inject(forwardRef( () => CartService)) private db: AngularFireDatabase) {}


    async ngOnInit(){
        this.cart$ = await this.shoppingCartService.getCart()
        console.log(this.cart$.list)
    }

}