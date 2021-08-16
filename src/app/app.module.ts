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
import { HomeComponent } from './home/home.component';
import { OneMicropostComponent } from './one-micropost/one-micropost.component';
import { UpdateMicropostComponent } from './update-micropost/update-micropost.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: '', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'micropost/:id',canActivate: [AuthGuard], component: OneMicropostComponent },
  { path: 'profile/:id',canActivate: [AuthGuard], component: ProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    MicropostViewComponent,
    LoginComponent,
    HomeComponent,
    OneMicropostComponent,
    UpdateMicropostComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    UserService,
    AuthService,
    MicropostService, 
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
