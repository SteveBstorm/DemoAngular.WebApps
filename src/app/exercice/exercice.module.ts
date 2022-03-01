import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { Exo01Component } from './components/exo01/exo01.component';
import { Exo02Component } from './components/exo02/exo02.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    Exo01Component,
    Exo02Component
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule
  ]
})
export class ExerciceModule { }
