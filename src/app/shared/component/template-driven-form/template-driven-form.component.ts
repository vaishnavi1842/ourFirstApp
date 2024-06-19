import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IcontasctArr, Ipatchvalue } from '../../models/student.interface';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
 
  @ViewChild('signup')signup !: NgForm
  constructor() { }

  ngOnInit(): void {
  }

  contactModeArr :Array<IcontasctArr>=[
    {
      moc:'Email',id:1
    },
    {
      moc:'Mobile',id:2
    }

  ]

  userInfo:Ipatchvalue={
    answer: "vha",
    contact: "12",
    email: "a@gmail.com",
    mocontact: "Email",
    sectreatquestion:"favouiritefood",
    username: "ssssssss",
    subscribed: true
  }

  onsubmit(){
    console.log(this.signup)
    console.log(this.signup.value)
    
  }

  onEdit(){
    this.signup.form.patchValue(this.userInfo)
  }
}
