import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents} from './app-routing/app-routing.module';
import { ContactService } from './services/contacts.service';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { StartPageComponent } from './components/start-page/start-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ContactsListComponent,
    LoginPageComponent,
    RegisterPageComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ AuthService, AuthGuard, ContactService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
