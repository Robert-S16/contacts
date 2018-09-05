import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact manager';


  constructor (private _auth: AuthService) {}
}
