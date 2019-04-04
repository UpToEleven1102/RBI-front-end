import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainControllerService } from '../../Services/main-controller.service';
import { Subscription } from 'rxjs';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  id: null;
  team: null;
  players: [];
  subscription: Subscription;
  displayedColumns: string[] = ['name', 'rbi', 'image', 'class', 'dob', 'home_town', 'ht_wt', 'action'];

  constructor(private route: ActivatedRoute, private mainCtrl: MainControllerService, private apollo: Apollo) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = params.id;
      this.getTeam();
    });
  }

  getTeamPlayers(team_id) {
    this.subscription = this.apollo.watchQuery<any>({
      query: gql`
        {
          teamPlayers(id: ${team_id}) {
            id
            name
            player_img
            class
            ht_wt
            home_town
            dob
            rbi
          }
        }
      `
    }).valueChanges.subscribe(result => {
      this.players = result.data.teamPlayers;
      console.log(this.players);
      this.subscription.unsubscribe();
    });
  }

  getTeam() {
    this.subscription = this.apollo.watchQuery<any>({
      query: gql`
        {
          team(id: ${this.id}){
            id
            name
            university_name
            team_img
            conference {
              id
              name
              nick_name
              founded
              member_number
          }
        }
        }
      `
    }).valueChanges.subscribe(result => {
      this.team = result.data.team;
      console.log(this.team);
      this.subscription.unsubscribe();
      if (this.team) {
        this.getTeamPlayers(result.data.team.id);
      }
    });
  }

}
