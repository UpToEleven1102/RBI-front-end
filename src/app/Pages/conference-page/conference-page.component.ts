import { Component, OnInit } from '@angular/core';
import { Conference } from "../../Services/types";
import { Apollo } from "apollo-angular";
import { MainControllerService } from "../../Services/main-controller.service";
import gql from "graphql-tag";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-conference-page',
  templateUrl: './conference-page.component.html',
  styleUrls: ['./conference-page.component.scss']
})
export class ConferencePageComponent implements OnInit {
  conference: Conference;
  subscription: Subscription;
  loading = true;
  displayedColumns: string[] = ['image', 'name', 'university_name', 'action'];


  constructor(private apollo: Apollo, private mainCtrl: MainControllerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getConference();
  }

  getConference() {
    this.route.params.subscribe(params => this.subscription = this.apollo.watchQuery<any>({
        query: gql`
          {
            conference(id: ${params.id}) {
              id
              name
              nick_name
              founded
              member_number
              teams {
                id
                name
                university_name
                team_img
              }
            }
          }
        `
      }).valueChanges.subscribe(result => {
        this.conference = result.data.conference;
        console.log(this.conference);
        this.loading = false;
        this.subscription.unsubscribe();
      })
    );
  }

}
