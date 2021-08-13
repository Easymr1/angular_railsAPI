import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MicropostService } from '../services/micropost.services';

@Component({
  selector: 'app-update-micropost',
  templateUrl: './update-micropost.component.html',
  styleUrls: ['./update-micropost.component.scss']
})
export class UpdateMicropostComponent implements OnInit {
  @Input() id!: string;
  update: boolean = false;
  constructor(private micropostService: MicropostService) { }

  ngOnInit(): void {

  }
  
  onSubmit(form: NgForm) {
    console.log(form.value)
    const swich = form.value['swich'];
    this.micropostService.put(parseInt(this.id), swich);

    this.update = false
  }

  putMicropost(value: boolean): void{
    this.update = value
  }
}
