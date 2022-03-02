import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ShowChronoPipe } from './pipes/show-chrono.pipe';
import { HighligthDirective } from './directives/highligth.directive';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ShowChronoPipe,
    HighligthDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ToFahrenheitPipe,
    ShowChronoPipe,
    HighligthDirective
  ]
})
export class SharedModule { }
