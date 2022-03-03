import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exo03-shopping-add-form',
  templateUrl: './exo03-shopping-add-form.component.html',
  styleUrls: ['./exo03-shopping-add-form.component.scss']
})
export class Exo03ShoppingAddFormComponent implements OnInit {

  @Output() public productEmitter : EventEmitter<string>;
  public produit : string = "";
  constructor() {

    this.productEmitter = new EventEmitter<string>();
   }

  ngOnInit(): void {
  }

  add(){
    if(this.produit.trim().length > 0)
    this.productEmitter.emit(this.produit);
    this.produit = "";
  }
}
