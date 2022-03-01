import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ShowChronoPipe } from './pipes/show-chrono.pipe';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ShowChronoPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ToFahrenheitPipe,
    ShowChronoPipe
  ]
})
export class SharedModule { }
