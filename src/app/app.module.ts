import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component'
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.services';
import { AuthComponent } from './auth/auth.component';
import { MicropostViewComponent } from './micropost-view/micropost-view.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'microposts', component: MicropostViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: MicropostViewComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    AuthComponent,
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
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
