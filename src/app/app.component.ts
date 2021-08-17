import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { Subject, Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  private token!: any;
  private decoded!: any;
  userId!: number;
  userAuth: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit(){
    !!localStorage.getItem('token') && this.getToken()
    this.login()
}

getToken() {
  const token = localStorage.getItem('token')?.split(' ')[1];
  this.token = token;
  this.decoded = jwt_decode(this.token!)
  this.userId = this.decoded.user_id

}

  login() {
    this.auth.signIn(this.token)
    this.userAuth = this.auth.isAuth
  }

  logout() {
    this.userAuth = false;
    this.auth.signOut()
  }
  
  

}
