import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exo01Component } from './components/exo01/exo01.component';
import { Exo02Component } from './components/exo02/exo02.component';
import { Exo03ShoppingListComponent } from './components/exo03-shopping-list/exo03-shopping-list.component';
import { Exo04Component } from './components/exo04/exo04.component';

const routes: Routes = [
  {path:'exo01', component: Exo01Component},
  {path:'exo02', component: Exo02Component},
  {path:'exo03', component: Exo03ShoppingListComponent},
  {path :'exo04', component : Exo04Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
