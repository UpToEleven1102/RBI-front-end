import { Component, OnDestroy, OnInit } from '@angular/core';
import gql from "graphql-tag";
import { Subscription } from "rxjs";
import { Apollo } from "apollo-angular";
import { Player } from "../../Services/types";
import { MainControllerService } from "../../Services/main-controller.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit, OnDestroy {
  id;
  subscription: Subscription;
  apolloSubscription: Subscription;
  player: Player = null;
  loading = false;

  constructor(private apollo: Apollo, private mainCtrl: MainControllerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
      }
    });
    this.getPlayer(this.id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getPlayer(id) {
    this.loading = true;
    this.apolloSubscription = this.apollo.watchQuery<any>({
      query: gql`
        {
          player(id: ${id}){
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
              rbi
            }
          }
        }
      `
    }).valueChanges.subscribe(result => {
      this.player = result.data.player;
      this.loading = false;
      console.log(this.player);
      this.apolloSubscription.unsubscribe();
    });
  }
}
