import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-demo08message',
  templateUrl: './demo08message.component.html',
  styleUrls: ['./demo08message.component.scss']
})
export class Demo08messageComponent implements OnInit {

  @Input() public message! : Message;
  @Output() public emitter : EventEmitter<Message>;
  public newMessage : string = "";

  constructor() { 
    this.emitter = new EventEmitter<Message>();
  }

  ngOnInit(): void {
  }

  send(){
    if(this.newMessage.trim().length == 0) return;
    this.emitter.emit(new Message(this.message.from, this.message.receiver, this.newMessage.trim()));
    this.newMessage = "";
  }

}
