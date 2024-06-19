import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  constructor() { }
  @ViewChild('fname') fname !: ElementRef 
  @ViewChild('lname') lname !: ElementRef
  @ViewChild('contact') contact !: ElementRef
  @ViewChild('email') email !: ElementRef
  stdArr=[
    {
      fname : "jon",
      lname : "doe",
      contact : 1233,
      email : "abc@gmal"
    }
   
  ]
  ngOnInit(): void {
  }

  onStdAdd(){
      let newStd={
        fname : this.fname.nativeElement.value,
        lname : this.lname.nativeElement.value,
        contact : this.contact.nativeElement.value,
        email: this.email.nativeElement.value
      }
      console.log(newStd)
      this.stdArr.push(newStd);
      this.fname.nativeElement.value='';
      this.lname.nativeElement.value='';
      this.contact.nativeElement.value='';
      this.email.nativeElement.value='';

  }
   
}
