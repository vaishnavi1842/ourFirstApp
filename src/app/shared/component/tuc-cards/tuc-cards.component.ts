import { Component, OnInit } from '@angular/core';
import { posts } from '../../Tuc/tuc';
import { Ituc } from '../../models/student.interface';

@Component({
  selector: 'app-tuc-cards',
  templateUrl: './tuc-cards.component.html',
  styleUrls: ['./tuc-cards.component.scss']
})
export class TucCardsComponent implements OnInit {
   tucData :Array<Ituc>= posts;
  constructor() { }

  ngOnInit(): void {
  }

}
