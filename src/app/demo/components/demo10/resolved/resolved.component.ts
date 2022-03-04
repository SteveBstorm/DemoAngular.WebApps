import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-resolved',
  templateUrl: './resolved.component.html',
  styleUrls: ['./resolved.component.scss']
})
export class ResolvedComponent implements OnInit {

  id : number = 0;
  constructor(
    private _activatedRoute : ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params["id"]
  }

  naviguer() {
    this._router.navigate(['demonstration/demo10'])
  }

}
