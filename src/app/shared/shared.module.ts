import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ShowChronoPipe } from './pipes/show-chrono.pipe';
import { HighligthDirective } from './directives/highligth.directive';
import { ToggleMenuDirective } from './directives/toggle-menu.directive';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ShowChronoPipe,
    HighligthDirective,
    ToggleMenuDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ToFahrenheitPipe,
    ShowChronoPipe,
    HighligthDirective,
    ToggleMenuDirective
  ]
})
export class SharedModule { }
