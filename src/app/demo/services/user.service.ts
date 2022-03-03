import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public username?:string;
  constructor() { }

  login(username:string){
    this.username = username;
  }

  logout(){
    this.username = undefined;
  }

  checkIfUserSaved(){
    return this.username != undefined;
  }

}
