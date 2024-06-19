import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IcontasctArr, Ipatchvalue } from '../../models/student.interface';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
//  @ViewChild('fname')fname ! : ElementRef
//  @ViewChild('lname')lname ! : ElementRef
//  @ViewChild('email')email ! : ElementRef
//  @ViewChild('contact')contact ! : ElementRef
  constructor() { }

  // selectedFramework:string="Html Content"
   
//   skillsArr : Array<Itab>=[
//     {
//      skillName : 'Html Content',
//      content : '<strong>Html Content</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore vel voluptatum consectetur voluptates totam officiis dolores aliquam dignissimos deserunt cupiditate in tenetur, voluptate accusamus fugit, cum praesentium iure sed labore'
     
//   },
//   {
//     skillName : 'Css Content',
//     content : '<strong>Css Content</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore vel voluptatum consectetur voluptates totam officiis dolores aliquam dignissimos deserunt cupiditate in tenetur, voluptate accusamus fugit, cum praesentium iure sed labore'
    
//  },
//  {
//   skillName : 'Js Content',
//   content : '<strong>Js Content</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore vel voluptatum consectetur voluptates totam officiis dolores aliquam dignissimos deserunt cupiditate in tenetur, voluptate accusamus fugit, cum praesentium iure sed labore'
  
// },
// ]
  // fname:string='';
  // lname:string='';
  // email:string='';
  // contact:string='';


  // stdArr=[
  //   {
  //     fname:"jon",
  //     lname:"doe",
  //     email:"ahg@j",
  //     contact:"155"
  //   }
  // ]

  // onStdAdd(fname:HTMLInputElement,lname:HTMLInputElement,email:HTMLInputElement,contact:HTMLInputElement){
  //    let obj={
  //       fname :fname.value,
  //       lname :lname.value,
  //       email :email.value,
  //       contact : contact.value
  //    }
  //    console.log(obj)
  //    this.stdArr.push(obj)
  //    fname.value='';
  //    lname.value='';
  //    email.value='';
  //    contact.value='';

  // }

  
  ngOnInit(): void {
  }

  // onClick(eve:string){
  //   this.selectedFramework=eve
  // }

  
  // onStdAdd(){
    // let obj={
    //   fname:this.fname.nativeElement.value,
    //   lname:this.lname.nativeElement.value,
    //   email:this.email.nativeElement.value,
    //   contact:this.contact.nativeElement.value
    // }
    // console.log(obj)
    // this.stdArr.push(obj)
    // this.fname.nativeElement.value='';
    // this.lname.nativeElement.value='';
    // this.email.nativeElement.value='';
    // this.contact.nativeElement.value='';

  // }
//   onStdAdd(){
//     let obj:Istr={
//       fname:this.fname,
//       lname:this.lname,
//       email:this.email,
//       contact:this.contact
//     }
//     console.log(obj);
//     this.stdArr.push(obj)
//     this.fname='';
//     this.lname='';
//     this.email='';
//     this.contact='';

//   }
@ViewChild('signup')signup !:NgForm

onsubmit(){
  console.log(this.signup)
  console.log(this.signup.value)
  this.signup.reset()

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


onEdit(){
  this.signup.form.patchValue(this.userInfo)
}


}


// -------------------------------------------------------------------------------------------------------

