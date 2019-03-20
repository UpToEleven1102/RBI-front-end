import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { TopPlayersComponent } from './Pages/top-players/top-players.component';
import { CalculateRbiComponent } from './Pages/calculate-rbi/calculate-rbi.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'top-players', component: TopPlayersComponent},
  { path: 'calculate-rbi', component: CalculateRbiComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopPlayersComponent,
    CalculateRbiComponent
  ],
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
