import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo04',
  templateUrl: './demo04.component.html',
  styleUrls: ['./demo04.component.scss']
})
export class Demo04Component implements OnInit {

  title : string = "Bienvenu dans la démonstration concernant les pipes!"
  constructor() { }

  ngOnInit(): void {
  }

}
