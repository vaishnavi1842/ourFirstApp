import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-std-tab-machine-test',
  templateUrl: './std-tab-machine-test.component.html',
  styleUrls: ['./std-tab-machine-test.component.scss']
})
export class StdTabMachineTestComponent implements OnInit {
  
  @ViewChild('fname')fname !: ElementRef
  @ViewChild('lname')lname !: ElementRef
  @ViewChild('email')email !: ElementRef
  @ViewChild('contact')contact !: ElementRef

  
   
  studentArr=[
    {
      fname:"jon",
      lname:"doe",
      email:"ass@",
      contact:"121"
    }
  ]

  constructor() { }
  selectedFramework:string='Angular'

  ngOnInit(): void {
  }

  ontabclick(eve:string){
    this.selectedFramework=eve
  }
  

  

  onStdAdd(){
     let obj={
      fname:this.fname.nativeElement.value,
      lname:this.lname.nativeElement.value,
      email:this.email.nativeElement.value,
      contact:this.contact.nativeElement.value
     }
     console.log(obj)
     this.studentArr.push(obj)
     this.fname.nativeElement.value=''
     this.lname.nativeElement.value=''
     this.email.nativeElement.value=''
    this.contact.nativeElement.value=''
  }

}
