import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component } from './components/demo01/demo01.component';
import { Demo02ProductDetailsComponent } from './components/demo02-product-details/demo02-product-details.component';
import { Demo02ProductEditComponent } from './components/demo02-product-edit/demo02-product-edit.component';
import { Demo02ProductComponent } from './components/demo02-product/demo02-product.component';
import { Demo02StockComponent } from './components/demo02-stock/demo02-stock.component';

const routes: Routes = [
  {path : 'demo01', component:Demo01Component},
  {path : 'demo02Product', component : Demo02ProductComponent, children:[
    {path : 'details', component : Demo02ProductDetailsComponent},
    {path : 'edit', component : Demo02ProductEditComponent}
  ]},
  {path : 'demo02Stock', component: Demo02StockComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
