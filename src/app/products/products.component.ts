import { Component, OnInit } from '@angular/core';

import { HttpService } from '../services/http.service';

// Import for Products Interface
import {ProdInterface} from './prod-interface'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
products: ProdInterface

  constructor(private dataService: HttpService) { }

  ngOnInit() {
    return this.dataService.getProducts().subscribe( data => {

      this.products = {
        color_way: data[0][0]['color_way'],
        name: data[0][0]['name'],
        id: data[0][0]['id'],
        description:data[0][0]['description'],
        price: data[0][0]['price'],
        photo:data[0][0]['photo'],
        qty:data[0][0]['qty']

      }
      console.log(this.products)
    })
  }

}
