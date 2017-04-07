import { Component } from '@angular/core';
import * as Moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  date = null;

  constructor() {
    this.date = Moment().format("YYYY-MM-DD");
  }
}
