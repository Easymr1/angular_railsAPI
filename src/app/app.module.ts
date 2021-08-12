import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component'
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.services';
import { MicropostViewComponent } from './micropost-view/micropost-view.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { MicropostService } from './services/micropost.services';

const appRoutes: Routes = [
  { path: 'microposts', component: MicropostViewComponent },
  { path: '', component: MicropostViewComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    MicropostViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    UserService,
    AuthService,
    MicropostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
