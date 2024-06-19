import { Component, OnInit } from '@angular/core';
import { Itab } from '../../models/student.interface';

@Component({
  selector: 'app-ng-for-tab',
  templateUrl: './ng-for-tab.component.html',
  styleUrls: ['./ng-for-tab.component.scss']
})
export class NgForTabComponent implements OnInit {
  selectedFrmaework : string = 'Html Content'

  constructor() { }

  onTabClick(eve : string){
     this.selectedFrmaework=eve
  }

  skillsArr : Array<Itab>=[
    {
     skillName : 'Html Content',
     content : '<strong>Html Content</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore vel voluptatum consectetur voluptates totam officiis dolores aliquam dignissimos deserunt cupiditate in tenetur, voluptate accusamus fugit, cum praesentium iure sed labore'
     
  },
  {
    skillName : 'Css Content',
    content : '<strong>Css Content</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore vel voluptatum consectetur voluptates totam officiis dolores aliquam dignissimos deserunt cupiditate in tenetur, voluptate accusamus fugit, cum praesentium iure sed labore'
    
 },
 {
  skillName : 'Js Content',
  content : '<strong>Js Content</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore vel voluptatum consectetur voluptates totam officiis dolores aliquam dignissimos deserunt cupiditate in tenetur, voluptate accusamus fugit, cum praesentium iure sed labore'
  
},
]

  ngOnInit(): void {
  }

}
