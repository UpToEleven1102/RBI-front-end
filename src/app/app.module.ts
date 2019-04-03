import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatTableModule, MatFormField, MatFormFieldModule, MatInputModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { TopPlayersComponent } from './Pages/top-players/top-players.component';
import { CalculateRbiComponent } from './Pages/calculate-rbi/calculate-rbi.component';
import { TopTenTableComponent } from './Components/top-ten-table/top-ten-table.component';
import { ManualRbiComponent } from './Components/manual-rbi/manual-rbi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';

const appRoutes: Routes = [
  { path: 'home', component: TopPlayersComponent},
  { path: 'search', component: HomePageComponent},
  { path: 'calculate-rbi', component: CalculateRbiComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopPlayersComponent,
    CalculateRbiComponent,
    TopTenTableComponent,
    ManualRbiComponent
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
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    TextFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
