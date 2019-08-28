import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CreateProdComponent } from './create-prod/create-prod.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsComponent,
    HomeComponent,
    CreateProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    /* .forRoot() tells the root Module to use the attached module
    (in this case MDBootstrapModule) as a root module and only loads this
    when needed (which is called lazy loading) and not before
    */
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
