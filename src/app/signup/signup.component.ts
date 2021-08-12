import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }
  onSubmit(form: NgForm) {
    console.log(form.value)
    const name = form.value['name'];
    const email = form.value['email'];
    const password = form.value['password'];
    const password_confirmation = form.value['password_confirmation'];
    this.userService.addUser(name, email, password, password_confirmation)
  }

}
