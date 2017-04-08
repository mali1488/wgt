import { Injectable } from '@angular/core';
import { List } from 'immutable';
import * as Moment from 'moment';
import { ServiceBase, ServiceStatus } from './service.base';

@Injectable()
export class DashboardService extends ServiceBase {

  private news: List<DashboardNews>;

  constructor() {
    super();
    this.loadNews();
  }

  public getNews = () => {
    return this.news;
  }

  private loadNews = () => {
    this.news = List<DashboardNews>([ {date: Moment(), text: 'This is news'} ]);
    this.emitChage();
  }

}

export interface DashboardNews {
  date: Moment.Moment;
  text: string;
  img?: string;
}
