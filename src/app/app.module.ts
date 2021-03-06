import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatTableModule,
  MatFormField,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule, MatProgressSpinnerModule, MatGridListModule, MatCardModule
} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { TopPlayersComponent } from './Pages/top-players/top-players.component';
import { CalculateRbiComponent } from './Pages/calculate-rbi/calculate-rbi.component';
import { TopTenTableComponent } from './Components/top-ten-table/top-ten-table.component';
import { ManualRbiComponent } from './Components/manual-rbi/manual-rbi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './Components/loading/loading.component';
import { PlayerPageComponent } from './Pages/player-page/player-page.component';
import { TeamPageComponent } from "./Pages/team-page/team-page.component";
import { ConferencePageComponent } from "./Pages/conference-page/conference-page.component";
import { MainPageComponent } from "./Pages/main-page/main-page.component";

const appRoutes: Routes = [
  { path: 'top-players', component: TopPlayersComponent},
  { path: 'main', component: MainPageComponent},
  { path: 'search', component: HomePageComponent},
  { path: 'calculate-rbi', component: CalculateRbiComponent},
  { path: 'player/:id', component: PlayerPageComponent},
  { path: 'team/:id', component: TeamPageComponent},
  { path: 'conference/:id', component: ConferencePageComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopPlayersComponent,
    CalculateRbiComponent,
    TopTenTableComponent,
    ManualRbiComponent,
    LoadingComponent,
    PlayerPageComponent,
    TeamPageComponent,
    ConferencePageComponent,
    MainPageComponent
  ],
  entryComponents: [LoadingComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    TextFieldModule,
    MatInputModule,
    GraphQLModule,
    HttpClientModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatCardModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
