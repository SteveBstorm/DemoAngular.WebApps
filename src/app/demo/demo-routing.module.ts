import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guard/auth.guard';
import { Demo01Component } from './components/demo01/demo01.component';
import { Demo02ProductDetailsComponent } from './components/demo02-product-details/demo02-product-details.component';
import { Demo02ProductEditComponent } from './components/demo02-product-edit/demo02-product-edit.component';
import { Demo02ProductComponent } from './components/demo02-product/demo02-product.component';
import { Demo02StockComponent } from './components/demo02-stock/demo02-stock.component';
import { Demo03Component } from './components/demo03/demo03.component';
import { Demo04Component } from './components/demo04/demo04.component';
import { Demo05Component } from './components/demo05/demo05.component';
import { Demo06Component } from './components/demo06/demo06.component';
import { Demo07Component } from './components/demo07/demo07.component';
import { Demo08Component } from './components/demo08/demo08.component';
import { Demo08messagerieComponent } from './components/demo08messagerie/demo08messagerie.component';
import { Demo09Component } from './components/demo09/demo09.component';
import { Demo10Component } from './components/demo10/demo10.component';
import { ResolvedComponent } from './components/demo10/resolved/resolved.component';

const routes: Routes = [
  {path:'', redirectTo:'demo01',pathMatch:'full'},
  {path : 'demo01', component:Demo01Component},
  {path : 'demo02product', component : Demo02ProductComponent, children:[
    {path : 'details', component : Demo02ProductDetailsComponent},
    {path : 'edit', component : Demo02ProductEditComponent}
  ]},
  {path : 'demo02stock', component: Demo02StockComponent},
  {path : 'demo03', component: Demo03Component},
  {path : 'demo04', component: Demo04Component},
  {path : 'demo05', component: Demo05Component},
  {path : 'demo06', canActivate : [AuthGuard], component: Demo06Component},
  {path : 'demo07', component: Demo07Component},
  {path : 'demo08', component: Demo08messagerieComponent},
  {path : 'demo08service', component: Demo08Component},
  {path : 'demo09', component: Demo09Component},
  {path : 'demo10', component: Demo10Component},
  {path : 'resolved/:id', component : ResolvedComponent},
  {path:'**', redirectTo : 'error'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
