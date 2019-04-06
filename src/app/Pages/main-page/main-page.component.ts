import { Component, OnInit } from '@angular/core';
import gql from "graphql-tag";
import { Subscription } from "rxjs";
import { Conference } from "../../Services/types";
import { Apollo } from "apollo-angular";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  subscription: Subscription;
  data: Array<Conference>;
  loading = true;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.getConferences();
  }

  getConferences = () => {
    this.subscription = this.apollo.watchQuery<any>({
      query: gql`
        {
          conferences {
            id
            name
            nick_name
            founded
            member_number
          }
        }
      `
    }).valueChanges.subscribe(result => {
      this.data = result.data.conferences;
      console.log(this.data)
      this.loading = false;
      this.subscription.unsubscribe();
    });
  }

}
