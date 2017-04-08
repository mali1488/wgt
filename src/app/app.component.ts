import { Component } from '@angular/core';
import * as Moment from 'moment';
import { NavbarButton } from './ui/navbar/navbar.component';
import { List } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private navbarButtons: List<NavbarButton>;

  constructor() {
    this.navbarButtons = List<NavbarButton>([
      {link: 'dashboard', title: 'HOME'},
      {link: 'scenes', title: 'SCENES'}
    ]);
  }
}
