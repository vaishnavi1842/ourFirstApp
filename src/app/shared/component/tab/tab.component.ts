import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  selectedFramework : string = 'node '

  constructor() { }

  ngOnInit(): void {
  }

  onTabClick(val : string){
     this.selectedFramework = val
  }
}
