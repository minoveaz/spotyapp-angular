import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  @Input() items: any [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
