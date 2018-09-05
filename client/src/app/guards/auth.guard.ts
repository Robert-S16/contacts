import { Injectable } from '@angular/core';
import { CanActivate, Router, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authSErvice: AuthService, private _router: Router) {

  }

  canActivate(): boolean {
    if (this._authSErvice.loggedIn()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
