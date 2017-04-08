import { Component, OnInit, Input } from '@angular/core';
import { List } from 'immutable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() buttons: List<NavbarButton>;

  constructor() { }

  ngOnInit() {}

}

export interface NavbarButton {
  link: string;
  title: string;
}
