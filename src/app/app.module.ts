import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { Sample01Component } from './components/sample01/sample01.component';
import { DemoRoutingModule } from './demo/demo-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Sample01Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoModule,
    DemoRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
