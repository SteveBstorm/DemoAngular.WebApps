import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-demo08messagerie',
  templateUrl: './demo08messagerie.component.html',
  styleUrls: ['./demo08messagerie.component.scss']
})
export class Demo08messagerieComponent implements OnInit {

  public messages : Message[] = [
    new Message('Student','Prof','Attention n\'oubliez pas nous sommes en présentiel demain!', new Date(2022,2,2,16,0,0)),
    new Message('Prof','Student','On n\'a pas oublié! Merci!', new Date(2022,2,2,16,5,0)),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addToList(newMessage : Message){
    this.messages.push(newMessage);
    
  }

}
