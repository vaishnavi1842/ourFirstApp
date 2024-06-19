import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-tab',
  templateUrl: './ng-switch-tab.component.html',
  styleUrls: ['./ng-switch-tab.component.scss']
})
export class NgSwitchTabComponent implements OnInit {
  // java: string = 'java';
  // python: string = 'python';
  // php: string = 'php';
  // c: string = 'c';
  selectedFramework: string = 'c';
  constructor() { }

  ngOnInit(): void {
  }
 
  onTabClick(eve : string){
    this.selectedFramework=eve
  }
}
