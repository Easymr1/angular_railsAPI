import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MicropostService } from '../services/micropost.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private micropostService: MicropostService, private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.signIn;
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
    const swich = form.value['swich'];
    this.micropostService.postMicropost(swich)
  }
}
