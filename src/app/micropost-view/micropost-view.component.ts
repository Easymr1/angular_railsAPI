import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MicropostService } from '../services/micropost.services';

@Component({
  selector: 'app-micropost-view',
  templateUrl: './micropost-view.component.html',
  styleUrls: ['./micropost-view.component.scss']
})
export class MicropostViewComponent implements OnInit {

  microposts!: any;

  constructor(private http : HttpClient, private micropostService: MicropostService) { }

  ngOnInit(): void {
    this.micropostService.getMicroposts()
    .then( () => {
      this.microposts = this.micropostService.data
    })
  }


}
