import { Component, OnInit } from '@angular/core';
import { Article } from './Models/Article.model';
import { ShoppingService } from './services/shopping.service';

@Component({
  selector: 'app-exo04',
  templateUrl: './exo04.component.html',
  styleUrls: ['./exo04.component.scss']
})
export class Exo04Component implements OnInit {

  viewList : Article[] = []

  constructor(
    private _service : ShoppingService
  ) { }

  ngOnInit(): void {
    this.viewList = this._service.articleList
  }

  // updateList() {
  //   this.viewList = this._service.articleList
  // }
  plus(index : number) {
    this._service.addQty(index)
  }

  moins(index : number) {
    this._service.remQty(index)
  }

  supprimer(index : number) {
    this._service.removeArticle(index)
  }

}
