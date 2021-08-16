import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  private token = localStorage.getItem('token')?.split(' ')[1];
  private decoded!: any;
  userId!: number;

  constructor(private auth: AuthService) {}

  ngOnInit(){
    this.decoded = jwt_decode(this.token!)
    this.userId = this.decoded.user_id
    this.auth.signIn(this.token)
  }
  
  

}
