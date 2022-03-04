import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-ajoutproduit',
  templateUrl: './ajoutproduit.component.html',
  styleUrls: ['./ajoutproduit.component.scss']
})
export class AjoutproduitComponent implements OnInit {

  newArticle! : string 

  // @Output() addEvent : EventEmitter<boolean> = new EventEmitter()
  constructor(
    private _service : ShoppingService
  ) { }

  ngOnInit(): void {
  }

  ajouter(){
    this._service.addArticle(this.newArticle)
    this.newArticle = ""
    // this.addEvent.next(true)
  }
}
