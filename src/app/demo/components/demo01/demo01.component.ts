import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrls: ['./demo01.component.scss']
})
export class Demo01Component implements OnInit {

  username! : string
  constructor(
    private _service : UserService
  ) { }

  ngOnInit(): void {
    this.username = this._service.username;
  }

}
