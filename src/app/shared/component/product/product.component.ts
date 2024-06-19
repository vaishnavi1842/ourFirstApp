import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector : 'app-product',
    templateUrl : './product.component.html',
    styleUrls : ['./product.component.scss']
})

export class ProductComponent {
    productName : string = "samsung";
    productId : number = 1234;

    // template to ts data transfer with event binding start
    onKeyUp(eve : Event){
        console.log((eve.target as HTMLInputElement).value);
    }
            //   end
    constructor(){

    }
}