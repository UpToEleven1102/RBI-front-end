import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoadingComponent } from '../loading/loading.component';
import { MainControllerService } from '../../Services/main-controller.service';
import { Player } from '../../Services/types';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';

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

export class TopTenTableComponent implements OnInit {
  loading = true;
  subscription: Subscription;

  displayedColumns: string[] = ['image', 'name', 'rbi', 'team', 'rush_yds',
    'rush_attempt', 'rec_yds', 'catches', 'rush_td', 'rec_td', 'fumbles', 'action'];
  dataSource: Array<Player> = [];

  constructor(private mainCtrl: MainControllerService, private apollo: Apollo) {
    this.mainCtrl.openLoadingDialog();
  }

  ngOnInit(): void {
    this.subscription = this.apollo.watchQuery<any>({
      query: gql`
        {
          topPlayers{
            id
            name
            rbi
            team {
              id
              name
              university_name
              team_img
            }
            player_img
            class
            ht_wt
            home_town
            dob
            stats {
              id
              year
              rush_yds
              rush_attempt
              rec_yds
              catches
              rush_td
              rec_td
              fumbles
            }
          }
        }
      `
    }).valueChanges.subscribe(result => {
      this.dataSource = result.data.topPlayers;
      this.mainCtrl.closeLoadingDialog();
      this.subscription.unsubscribe();
    });
  }
}
