import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo02',
  templateUrl: './exo02.component.html',
  styleUrls: ['./exo02.component.scss']
})
export class Exo02Component implements OnInit {

  public time : number = 0;
  public interval : any = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  startChrono(){
    console.log('start');
    this.interval = setInterval(() => this.time ++, 1000);
  }

  pauseChrono(){
    console.log('pause');
    clearInterval(this.interval);
    this.interval = undefined;
  }

  resetChrono(){
    console.log('reset');
    this.time = 0;
  }

}
