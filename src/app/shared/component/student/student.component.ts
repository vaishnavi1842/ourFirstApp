import { Component } from "@angular/core";
import { Istd } from "../../models/student.interface";

@Component({
    selector : 'app-student',
    templateUrl : './student.component.html',
    styleUrls : ['./student.component.scss']

})
export class studentComponent{
    stdArr : Array<Istd> = [
        {
            fname: "jhon",
            lname: "doe",
            email: "abc@gmail.com",
            contact : 123314545

        },
        {
            fname: "hhh",
            lname: "ccc",
            email: "ddc@gmail.com",
            contact : 9898989899

        },
        {
            fname: "ooo",
            lname: "ttt",
            email: "oo@gmail.com",
            contact : 9898989899

        }
    ]
}