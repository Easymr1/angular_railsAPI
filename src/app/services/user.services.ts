import {HttpClient} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class UserService implements OnInit{

    constructor(private http : HttpClient){

    } 

    ngOnInit(): void {
        this.addUser  
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
              console.log(data)
          }
      )
  }
}