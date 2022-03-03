import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { Demo01Component } from './components/demo01/demo01.component';
import { Demo02ProductComponent } from './components/demo02-product/demo02-product.component';
import { Demo02ProductEditComponent } from './components/demo02-product-edit/demo02-product-edit.component';
import { Demo02ProductDetailsComponent } from './components/demo02-product-details/demo02-product-details.component';
import { Demo02StockComponent } from './components/demo02-stock/demo02-stock.component';
import { Demo03Component } from './components/demo03/demo03.component';
import { FormsModule } from '@angular/forms';
import { Demo04Component } from './components/demo04/demo04.component';
import { SharedModule } from '../shared/shared.module';
import { Demo05Component } from './components/demo05/demo05.component';
import { Demo06Component } from './components/demo06/demo06.component';
import { Demo07Component } from './components/demo07/demo07.component';
import { Demo08messagerieComponent } from './components/demo08messagerie/demo08messagerie.component';
import { Demo08messageComponent } from './components/demo08message/demo08message.component';
import { Demo08Component } from './components/demo08/demo08.component';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    Demo01Component,
    Demo02ProductComponent,
    Demo02ProductEditComponent,
    Demo02ProductDetailsComponent,
    Demo02StockComponent,
    Demo03Component,
    Demo04Component,
    Demo05Component,
    Demo06Component,
    Demo07Component,
    Demo08messagerieComponent,
    Demo08messageComponent,
    Demo08Component
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers:[
    UserService
  ]
})
export class DemoModule { }
