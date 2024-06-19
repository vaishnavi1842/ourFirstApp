import { Component, OnInit } from '@angular/core';
import { Istr } from '../../models/student.interface';

@Component({
  selector: 'app-std-table-two-way-data-binding',
  templateUrl: './std-table-two-way-data-binding.component.html',
  styleUrls: ['./std-table-two-way-data-binding.component.scss']
})
export class StdTableTwoWayDataBindingComponent implements OnInit {

  constructor() { }

  Fname : string=''
  Lname : string= ''
  Email : string=''
  Contact : string=''

   stdArr:Array<Istr>=[
    {
       fname:"jon",
       lname:"doe",
       email:"jon@h",
       contact:"1221"
    }
  ]
  ngOnInit(): void {
  }

  onstdAdd(){
    let obj:Istr={
      fname : this.Fname,
      lname : this.Lname,
      email : this.Email,
      contact : this.Contact
    }
    console.log(obj)
    this.stdArr.push(obj)
    this.Fname=''
    this.Lname=''
    this.Email=''
    this.Contact=''
    
  }
}
