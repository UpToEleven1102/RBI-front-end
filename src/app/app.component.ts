import {Component} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RBI-front-end';
  menuOpen = true;

  constructor(private router: Router) {

  }

  toggleMenu = () => this.menuOpen = !this.menuOpen;

  goToHome = () => this.router.navigateByUrl('/main');
}
