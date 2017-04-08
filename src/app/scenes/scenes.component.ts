import { Component, OnInit } from '@angular/core';
import { ScenesService, IScene } from '../services/scenes.service';
import { List } from 'immutable';

@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.css']
})
export class ScenesComponent implements OnInit {

  private scenes: List<IScene> = List<IScene>();

  constructor(private _scenesService: ScenesService) {
    this.scenes = this._scenesService.getScenes();
    this._scenesService.onChange(this.onChangeScenes);
  }

  private onChangeScenes = () => {
    this.scenes = this._scenesService.getScenes();
  }

  ngOnInit() {}

}
