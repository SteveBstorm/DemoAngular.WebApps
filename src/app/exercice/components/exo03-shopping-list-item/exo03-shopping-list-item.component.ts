import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exo03-shopping-list-item',
  templateUrl: './exo03-shopping-list-item.component.html',
  styleUrls: ['./exo03-shopping-list-item.component.scss']
})
export class Exo03ShoppingListItemComponent implements OnInit {

  @Input() article! :string;
  @Output() deleteEmitter : EventEmitter<boolean>;
  constructor() { 
    this.deleteEmitter = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  deleteArticle(){
    this.deleteEmitter.emit(true);
  }

}
