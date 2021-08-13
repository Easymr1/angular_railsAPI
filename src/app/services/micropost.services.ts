import {HttpClient} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'

@Injectable()
export class MicropostService implements OnInit{
    oneMicropost!: any;

    micropostRefresh$ = new Subject<void>();
    

    constructor(private http : HttpClient,private authService: AuthService, private router: Router) {}

    ngOnInit(): void{
        this.getMicroposts();
    }
    getMicroposts(): Observable<any> {
        const headers = { 'Authorization': localStorage.getItem('token')!};
        return this.http.get('http://localhost:3000/microposts', { headers }) 
    }

    postMicropost(swich: string){
        const headers = { 'Authorization': localStorage.getItem('token')!}
        const micropost = {
            content: swich,
        }
        this.http.post<any>('http://localhost:3000/microposts', {micropost}, { headers })
        .subscribe((res: any) => {
            this.micropostRefresh$.next()
        })
    }

    getOneMicropost(id: number) {
        const headers = { 'Authorization': localStorage.getItem('token')!}
        this.http.post<any>(`http://localhost:3000/microposts${id}`, { headers })
    }

    getDelete(id: number) {
        const headers = { 'Authorization': localStorage.getItem('token')!};
        return this.http.delete('http://localhost:3000/microposts', { headers })
    }

}