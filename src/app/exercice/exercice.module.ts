import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { Exo01Component } from './components/exo01/exo01.component';
import { Exo02Component } from './components/exo02/exo02.component';
import { SharedModule } from '../shared/shared.module';
import { Exo03ShoppingListComponent } from './components/exo03-shopping-list/exo03-shopping-list.component';
import { Exo03ShoppingAddFormComponent } from './components/exo03-shopping-add-form/exo03-shopping-add-form.component';
import { FormsModule } from '@angular/forms';
import { Exo03ShoppingListItemComponent } from './components/exo03-shopping-list-item/exo03-shopping-list-item.component';


@NgModule({
  declarations: [
    Exo01Component,
    Exo02Component,
    Exo03ShoppingListComponent,
    Exo03ShoppingAddFormComponent,
    Exo03ShoppingListItemComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ExerciceModule { }
