import { Injectable } from '@angular/core';
import { Article } from '../Models/Article.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  articleList : Article[] =[]

  constructor() { }

  addArticle(articleName : string) {
    let articleIndex = this.articleList.findIndex(x => x.nom == articleName)
    if(articleIndex < 0) this.articleList.push({nom : articleName, qty : 1})
    else this.addQty(articleIndex)
  }

  removeArticle(index : number) {
    this.articleList.splice(index, 1)
  }

  addQty(index : number) {
    this.articleList[index].qty++;
  }

  remQty(index : number) {
    if(this.articleList[index].qty <= 1) this.removeArticle(index)
    else this.articleList[index].qty--;
  }
}
