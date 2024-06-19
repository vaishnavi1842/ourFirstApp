import { Component } from "@angular/core";


@Component({
    selector : `app-products`,
    templateUrl : `./products.component.html`,
})
export class productComponent{
    
    // element reference with evnt binding
    onProductAdd(product : HTMLInputElement){
      console.log(product.value)
    }
    //   End
    
    getProduct : string ="hello js"

    constructor(){

    }
}