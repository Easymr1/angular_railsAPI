import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }
  onSubmit(form: NgForm) {
    console.log(form.value)
    const email = form.value['email'];
    const password = form.value['password'];
    this.userService.userLogin(email, password)
  }
}
