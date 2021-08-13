import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MicropostService } from '../services/micropost.services';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-micropost-view',
  templateUrl: './micropost-view.component.html',
  styleUrls: ['./micropost-view.component.scss']
})
export class MicropostViewComponent implements OnInit {
  microposts!: any;

  subscription!: Subscription;
  constructor(private http : HttpClient, private micropostService: MicropostService) { }


  ngOnInit(): void {
    this.getMicroposts();
    
    this.subscription = this.micropostService.micropostRefresh$.subscribe(() => {
      this.getMicroposts();
    })
  }

  getMicroposts(): void{
    this.micropostService.getMicroposts().subscribe(
            (res: any) => {
            this.microposts = res
            }
          )
  }

  deleteMicropost(id: number):void {
    this.micropostService.delete(id)
  }
}
