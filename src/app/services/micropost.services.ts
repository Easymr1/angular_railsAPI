import {HttpClient} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class MicropostService implements OnInit{
    data!: any;

    constructor(private http : HttpClient,private authService: AuthService, private router: Router) {}

    ngOnInit() : void {
        this.getMicroposts
    }

    getMicroposts() {
        return new Promise((resolve, reject) => {
            const headers = { 'Authorization': localStorage.getItem('token')!};
            this.http.get('http://localhost:3000/microposts', { headers }
            ).subscribe(
            res => {
                this.data = res
                resolve(true)
            }
            )  
        })
    
    }

}