import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MicropostService } from '../services/micropost.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private micropostService: MicropostService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
    const swich = form.value['swich'];
    this.micropostService.postMicropost(swich)
  }
}
