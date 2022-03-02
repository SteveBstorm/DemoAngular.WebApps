import { Component, OnInit } from '@angular/core';
import { DivStyle } from '../../models/div-style';

@Component({
  selector: 'app-demo05',
  templateUrl: './demo05.component.html',
  styleUrls: ['./demo05.component.scss']
})
export class Demo05Component implements OnInit {

  public isRed: boolean = false;
  public divClass: DivStyle = new DivStyle('bg-red');//{ 'bg-green': true , 'bg-red' : false, 'bg-blue': false};
  public bgColor: string = "yellow";
  public size : number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.isRed = !this.isRed;
      this.changeColor();
    }, 1000);
  }

  changeColor() {
    switch (new Date().getSeconds() % 5) {
      case 0:
        this.bgColor = "yellow";
        break;
      case 1:
        this.bgColor = "cyan";
        break;
      case 2:
        this.bgColor = "magenta";
        break;
      case 3:
        this.bgColor = "black";
        break;
      case 4:
        this.bgColor = "white";
        break;
    }
  }
}
