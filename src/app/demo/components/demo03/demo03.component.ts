import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo03',
  templateUrl: './demo03.component.html',
  styleUrls: ['./demo03.component.scss']
})
export class Demo03Component implements OnInit {

  title : string = "Titre provenant du Typescript";
  zeroToTen : number = 0;
  value : string = "Ma valeur";
  couleur : string = "#FFFFFF";
  estConnecte : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.countToTen();
  }

  countToTen(){
    setInterval(()=> this.zeroToTen +=1, 1000);
  }

  direCoucou(){
    alert(`Bonjour ${this.value}!`);
  }

  debug(obj:HTMLElement){
    console.log(obj);
  }

  SeConnecter(){
    this.estConnecte = true;
  }
  SeDeconnecter(){
    this.estConnecte = false;
  }
  ChangerConnection(){
    this.estConnecte = !this.estConnecte;
  }

}
