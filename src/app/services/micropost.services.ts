import {HttpClient} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { BehaviorSubject, Observable, of } from 'rxjs'
import { switchMap } from 'rxjs/operators'

@Injectable()
export class MicropostService implements OnInit{
    allMicroposts!: any;
    oneMicropost!: any;

    micropostRefresh$ = new BehaviorSubject<boolean>(true);

    constructor(private http : HttpClient,private authService: AuthService, private router: Router) {}

    ngOnInit() : void {

    }

    getMicroposts() {
        const headers = { 'Authorization': localStorage.getItem('token')!};
       return new Promise((resolve, reject) => {
            this.http.get('http://localhost:3000/microposts', { headers }
            ).subscribe(
            res => {
                console.log(res)
                this.allMicroposts = res
                resolve(true)
                this.micropostRefresh$.subscribe(l => console.log(l))
            }
            )  
        })
    }

    postMicropost(swich: string) {
        const headers = { 'Authorization': localStorage.getItem('token')!}
        const micropost = {
            content: swich,
        }
        this.http.post<any>('http://localhost:3000/microposts', {micropost}, { headers }).subscribe(
            data => {
                console.log(data)
                this.getMicroposts
                this.micropostRefresh$.next(false)
            }
        )
    }

    getOneMicropost(id: number) {
        const headers = { 'Authorization': localStorage.getItem('token')!}
        this.http.post<any>(`http://localhost:3000/microposts${id}`, { headers }).subscribe(
            data => {
                console.log(data)
            }
        )
    }



}