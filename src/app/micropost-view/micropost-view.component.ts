import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-micropost-view',
  templateUrl: './micropost-view.component.html',
  styleUrls: ['./micropost-view.component.scss']
})
export class MicropostViewComponent implements OnInit {

  users!: any;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('token'))
    const headers = { 'Authorization': localStorage.getItem('token')!};
    this.http.get('http://localhost:3000/microposts', { headers }
    
    ).subscribe(
      res => {
        this.users = res;
        console.log(this.users)
      }
    )
  }

}
