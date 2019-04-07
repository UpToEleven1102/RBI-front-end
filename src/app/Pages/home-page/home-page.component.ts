import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { MainControllerService } from '../../Services/main-controller.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  data = []
  searchText = '';
  subscription: Subscription;
  loading = false;
  searched = false;
  constructor(private apollo: Apollo, private mainCtrl: MainControllerService) {
  }

  ngOnInit() {
  }

  onSearchChange(text) {
    if (text.length > 1) {
      this.searched = true;
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      this.loading = true;
      this.subscription = this.apollo.watchQuery<any>({
        query: gql`
          {
            players(filter: "${text}"){
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
        this.data = result.data.players;
        console.log(this.data)
        this.loading = false;
        this.subscription.unsubscribe();
      });
    }
  }
}
