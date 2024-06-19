import { Component, OnInit } from '@angular/core';
import { Istr } from '../../models/student.interface';

@Component({
  selector: 'app-std-table-event-binding-eleref',
  templateUrl: './std-table-event-binding-eleref.component.html',
  styleUrls: ['./std-table-event-binding-eleref.component.scss']
})
export class StdTableEventBindingElerefComponent implements OnInit {

  constructor() { }
  

stdArry=[
  {
    fname:"jon",
    lname:"doe",
    email:"jon@gmail.com",
    contact:"12133"
  }
]
  ngOnInit(): void {
  }

  onstdAdd(fname : HTMLInputElement,lname : HTMLInputElement,email : HTMLInputElement,contact:HTMLInputElement){
    let obj:Istr={
      fname :fname.value,
      lname :lname.value,
      email :email.value,
      contact : contact.value
    }
    console.log(obj)
    this.stdArry.push(obj)
    fname.value=''
    lname.value=''
    email.value=''
    contact.value=''
  }
}
