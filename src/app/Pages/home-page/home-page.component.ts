import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  data = [{
      name: 'Pla342'
    },{
      name: 'Player 3'
    },{
      name: 'Player 1'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
