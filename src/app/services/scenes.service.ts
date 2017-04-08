import { Injectable } from '@angular/core';
import * as Moment from 'moment';
import { List } from 'immutable';
import { ServiceBase } from './service.base';

@Injectable()
export class ScenesService extends ServiceBase {

  private scenes: List<IScene> = List<IScene>();

  constructor() {
    super();
    this.loadScenes();
   }

   public getScenes = () => {
     return this.scenes;
   }

   private loadScenes = () => {
     this.scenes = List<IScene>([ {date: Moment(), bands: ['some band']} , {date: Moment(), bands: ['kek', 'lel']} ]);
     this.emitChage();
   }

}

export interface IScene {
  date: Moment.Moment;
  bands: string[];
}