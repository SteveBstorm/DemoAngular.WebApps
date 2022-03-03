import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-demo08',
  templateUrl: './demo08.component.html',
  styleUrls: ['./demo08.component.scss']
})
export class Demo08Component implements OnInit {

  public username : string = "";
  public isConnected : boolean = false;

  constructor(private _service : UserService) { }

  ngOnInit(): void {
    this.username = this._service.username ?? "";
    this.isConnected = this._service.checkIfUserSaved();
  }

  saveUser(){
    if(this.username.trim().length > 0) {
      this._service.login(this.username.trim())
      this.isConnected = this._service.checkIfUserSaved();
    }
  }

  newUser(){
    this._service.logout();
    this.isConnected=this._service.checkIfUserSaved();
  }

}
