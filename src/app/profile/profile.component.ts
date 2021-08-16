import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MicropostService } from '../services/micropost.services';
import { Subscription } from 'rxjs'
import { Router } from '@angular/router';
import { UserService } from '../services/user.services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private userId!: number;
  profileUser: any = '';
  updateForm: boolean = false;
  subscription!: Subscription;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params.id;
    this.profile()

    this.subscription = this.userService.profileRefresh$.subscribe(() => {
      this.profile();
    })
  }

  profile() {
    this.userService.getProfile(this.userId)
    .subscribe(
      res => {
        this.profileUser = res;
      }
    )
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const email = form.value['email'];
    this.userService.putProfile(this.userId, name, email);
    this.updateProfile()
  }

  updateProfile() {
    this.updateForm = !this.updateForm
  }

  deleteProfile() {
    this.userService.delete(this.userId)
  }

}
