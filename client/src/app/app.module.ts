import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactService } from './services/contacts.service';

const routes: Routes = [
  {path: 'mainpage', component: AppComponent},
  {path: 'contacts', component: ContactsListComponent},
  {path: '', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactsListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
