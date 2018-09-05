import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'http://localhost:3000/register';
  private loginUrl = 'http://localhost:3000/login';
  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user: User): Observable<any> {
    return this.http.post<User>(this.registerUrl, user);
  }

  loginUser(user: User): Observable<any> {
    return this.http.post<User>(this.loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  loggoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
