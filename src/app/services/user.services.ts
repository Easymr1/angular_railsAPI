import {HttpClient} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class UserService implements OnInit{

    constructor(private http : HttpClient,private authService: AuthService, private router: Router){

    } 

    ngOnInit(): void {
        this.addUser;
        this.userLogin; 
    }

  addUser(name: string, email: string, password: string, password_confirmation: string) {
      const user = {
          name: name,
          email: email,
          password: password,
          password_confirmation: password_confirmation
          
      }
      this.http.post<any>('http://localhost:3000/users', {user}).subscribe(
          data => {
            console.log(data.token)
            localStorage.setItem('token', data.token)
            this.authService.signIn()
            this.router.navigate(['/microposts'])
          }
      )
  }

  userLogin(email: string, password: string) {
    const user = {
        email: email,
        password: password 
    }
    this.http.post<any>('http://localhost:3000/sessions', {user}).subscribe(
        data => {
            console.log(data.token)
            localStorage.setItem('token', data.token)
            this.authService.signIn()
            this.router.navigate(['/microposts'])
        }
    )
}

}