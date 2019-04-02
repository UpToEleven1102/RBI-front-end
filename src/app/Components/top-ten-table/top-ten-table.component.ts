import { Component, OnInit } from '@angular/core';

export interface rb {
  position: number;
  name: string;
  rbi: number;
  rush_yds: number;
  rush_attempt: number;
  rec_yds: number;
  catches: number; 
  rush_td: number;
  rec_td: number;
  fumbles: number;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: rb[] = [
  {position: 1, name:'', rbi:0, rush_yds:0, rush_attempt:0, rec_yds:0, catches:0, rush_td:0, rec_td:0, fumbles:0},
  {position: 2, name:'', rbi:0, rush_yds:0, rush_attempt:0, rec_yds:0, catches:0, rush_td:0, rec_td:0, fumbles:0},
  {position: 3, name:'', rbi:0, rush_yds:0, rush_attempt:0, rec_yds:0, catches:0, rush_td:0, rec_td:0, fumbles:0},
  {position: 4, name:'', rbi:0, rush_yds:0, rush_attempt:0, rec_yds:0, catches:0, rush_td:0, rec_td:0, fumbles:0},
  {position: 5, name:'', rbi:0, rush_yds:0, rush_attempt:0, rec_yds:0, catches:0, rush_td:0, rec_td:0, fumbles:0},
  {position: 6, name:'', rbi:0, rush_yds:0, rush_attempt:0, rec_yds:0, catches:0, rush_td:0, rec_td:0, fumbles:0},
  {position: 7, name:'', rbi:0, rush_yds:0, rush_attempt:0, rec_yds:0, catches:0, rush_td:0, rec_td:0, fumbles:0},
  {position: 8, name:'', rbi:0, rush_yds:0, rush_attempt:0, rec_yds:0, catches:0, rush_td:0, rec_td:0, fumbles:0},
  {position: 9, name:'', rbi:0, rush_yds:0, rush_attempt:0, rec_yds:0, catches:0, rush_td:0, rec_td:0, fumbles:0},
  {position: 10, name:'', rbi:0, rush_yds:0, rush_attempt:0, rec_yds:0, catches:0, rush_td:0, rec_td:0, fumbles:0},
];


@Component({
  selector: 'app-top-ten-table',
  templateUrl: './top-ten-table.component.html',
  styleUrls: ['./top-ten-table.component.scss']
})
/*
export class TopTenTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/

export class TopTenTableComponent {
  displayedColumns: string[] = ['position','name', 'rbi', 'rush_yds', 'rush_attempt', 'rush_attempt', 'rec_yards', 'catches', 'rush_td', 'rec_td', 'fumbles'];
  dataSource = ELEMENT_DATA;
}