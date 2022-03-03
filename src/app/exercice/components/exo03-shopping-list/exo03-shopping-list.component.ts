import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo03-shopping-list',
  templateUrl: './exo03-shopping-list.component.html',
  styleUrls: ['./exo03-shopping-list.component.scss']
})
export class Exo03ShoppingListComponent implements OnInit {

  public list: string[] = [
    'Bananes', 'Mandarines', 'Fraises'
  ];
  constructor() {
    
  }
  
  ngOnInit(): void {
  }

  addArticle(newArticle : string){
    this.list.push(newArticle);
  }

  deleteArticle(index : number){
    this.list.splice(index,1);
  }

}
