import { Component, OnInit } from '@angular/core';
import { BaseArticle } from '../../models/base-article';

@Component({
  selector: 'app-demo06',
  templateUrl: './demo06.component.html',
  styleUrls: ['./demo06.component.scss']
})
export class Demo06Component implements OnInit {
  
  public isGenerate : boolean = false;
  //public nbIterate : number = 0;
  public students : string[] = ["Alexandre","Ola","Aline","Juliana","Benoit","Alexis","David","Adrian","Loris","Jean-Pierre","Joao","Sébastien"];
  public newStudent : string = "";
  public articles : BaseArticle[] = [
    new BaseArticle('Article 1', 'Bienvenu dans l\'article 1 ...'),
    new BaseArticle('Article 2', 'Bienvenu dans l\'article 2 ...', 'Second article'),
    new BaseArticle('Article 3', 'Bienvenu dans l\'article 3 ...', 'Troisième article'),
    new BaseArticle('Article 4', 'Bienvenu dans l\'article 4 ...'),
    new BaseArticle('Article 5', 'Bienvenu dans l\'article 5 ...',undefined, 'exemple.jpg'),
  ];
  public nourriture : string = "";
  constructor() { }

  ngOnInit(): void {
  }

  
  public saveStudent(){
    if(this.newStudent.trim().length <= 0) return;
    this.students.push(this.newStudent.trim());
    this.newStudent = "";
  }
}
