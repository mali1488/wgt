import { Component, OnInit } from '@angular/core';
import { DashboardService, DashboardNews } from '../services/dashboard.service';
import { List } from 'immutable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private news: List<DashboardNews>;

  constructor(private _dashBoardService: DashboardService) {
    this.news = this._dashBoardService.getNews();
    this._dashBoardService.onChange(this.onChangeNews);
  }

  private onChangeNews = () => {
    this.news = this._dashBoardService.getNews();
  }

  ngOnInit() {}

}
