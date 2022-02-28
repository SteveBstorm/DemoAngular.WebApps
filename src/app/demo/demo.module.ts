import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { Demo01Component } from './components/demo01/demo01.component';
import { Demo02ProductComponent } from './components/demo02-product/demo02-product.component';
import { Demo02ProductEditComponent } from './components/demo02-product-edit/demo02-product-edit.component';
import { Demo02ProductDetailsComponent } from './components/demo02-product-details/demo02-product-details.component';
import { Demo02StockComponent } from './components/demo02-stock/demo02-stock.component';


@NgModule({
  declarations: [
    Demo01Component,
    Demo02ProductComponent,
    Demo02ProductEditComponent,
    Demo02ProductDetailsComponent,
    Demo02StockComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
