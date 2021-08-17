import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MicropostService } from '../services/micropost.services';
import { Subscription } from 'rxjs'
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-one-micropost',
  templateUrl: './one-micropost.component.html',
  styleUrls: ['./one-micropost.component.scss']
})
export class OneMicropostComponent implements OnInit {

  micropostId!: number;
  micropost: any = '';
  userId!: number;
  subscription!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private micropostServive: MicropostService,
    private router: Router,
    private appConponent: AppComponent) { }

  ngOnInit(): void {
    this.micropostId = this.activatedRoute.snapshot.params.id;
    this.userId = this.appConponent.userId
    this.getMicropost();

    this.subscription = this.micropostServive.micropostRefresh$.subscribe(() => {
      this.getMicropost();
    })
  }

  getMicropost() {
      this.micropostServive.getOneMicropost(this.micropostId)
    .subscribe((res: any) => {
      this.micropost = res
      console.log(res)
    })
    }

  deleteMicropost() {
    this.micropostServive.delete(this.micropostId).subscribe((res: any) => {
      console.log(res)
      this.micropost = ''
      this.micropostServive.micropostRefresh$.next()
      this.router.navigate(['/home'])
  })
  }

}
