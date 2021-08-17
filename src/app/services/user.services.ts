import {HttpClient} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class UserService implements OnInit{
    profileRefresh$ = new Subject<void>();

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
            localStorage.setItem('token', data.token)
            const token = localStorage.getItem('token')
            this.authService.signIn(token)
            this.router.navigate(['/home'])
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
            localStorage.setItem('token', data.token)
            const token = localStorage.getItem('token')
            this.authService.signIn(token)
            this.router.navigate(['/home'])
            
        }
    )
}

    getProfile(id: number) {
        const headers = { 'Authorization': localStorage.getItem('token')!}
        return this.http.get<any>(`http://localhost:3000/users/${id}`, { headers })
    }

    putProfile(id: number, name: string, email: string) {
        const headers = { 'Authorization': localStorage.getItem('token')!}
        const user = {
            name: name,
            email: email
        }
        this.http.put<any>(`http://localhost:3000/users/${id}`, { user }, { headers })
        .subscribe(res => {
             console.log(res)
             this.profileRefresh$.next()
        })
    }

    delete(id: number) {
        console.log(`Utilisateur ${id} supprimer`)
    }

}