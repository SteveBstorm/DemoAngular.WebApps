import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/demo/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _authService : UserService,
    private _router : Router
  ) {

  }
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this._authService.username)
      if(this._authService.checkIfUserSaved()){
        if(this._authService.username == 'admin') return true;
        else {
          alert('T\'as pas le grade requis')
          return false
        }
      }

        

        this._router.navigate([''])
      return false
  }
  
}
