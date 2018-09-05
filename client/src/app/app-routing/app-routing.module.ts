import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { LoginPageComponent } from '../components/login-page/login-page.component';
import { ContactsListComponent } from '../components/contacts-list/contacts-list.component';
import { RegisterPageComponent } from '../components/register-page/register-page.component';
import { AuthGuard } from '../guards/auth.guard';
import { StartPageComponent } from '../components/start-page/start-page.component';

const routes: Routes = [
  { path: 'home', component: StartPageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'contacts', component: ContactsListComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginPageComponent, ContactsListComponent];
