import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RBI-front-end';
  menuOpen = true;

  toggleMenu = () => this.menuOpen = !this.menuOpen;
}
