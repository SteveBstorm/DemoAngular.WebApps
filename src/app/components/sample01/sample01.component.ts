import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample01',
  templateUrl: './sample01.component.html',
  // template: `<p>Voici un code directement écrit dans le fichier TS</p>`,
  styleUrls: ['./sample01.component.scss']
})
export class Sample01Component implements OnInit, OnDestroy {

  nomUtilisateur: string = "Samuel";
  nb1: number = 3;

  constructor() { }

  ngOnDestroy(): void {
    console.log("Le component est déchargé.");
  }

  ngOnInit(): void {
    for (let index = 0; index < this.nb1; index++) {
      this.afficherNom();
    }
  }

  afficherNom(){
    alert(`Bienvenu ${this.nomUtilisateur}!`);
  }

}
