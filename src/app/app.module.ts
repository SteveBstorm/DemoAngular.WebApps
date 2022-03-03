import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { Sample01Component } from './components/sample01/sample01.component';
import { DemoRoutingModule } from './demo/demo-routing.module';
import { ExerciceModule } from './exercice/exercice.module';
import { ExerciceRoutingModule } from './exercice/exercice-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { NavigationLinkComponent } from './components/navigation-link/navigation-link.component';

@NgModule({
  declarations: [
    AppComponent,
    Sample01Component,
    NavigationComponent,
    FooterComponent,
    NavigationLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    /** plus besoin d'importer dans le app.module les modules de routing d'autres modules, seul le loadChildren est nécessaire! */
    // DemoModule,
    // DemoRoutingModule,
    // ExerciceModule,
    // ExerciceRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
