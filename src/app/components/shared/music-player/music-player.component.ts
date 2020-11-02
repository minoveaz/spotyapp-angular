import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})


export class MusicPlayerComponent implements OnInit {

  @Input() items: any [] = [];

  audioObj = new Audio();

  file = {
    url: './assets/audio/Audio_One.mp3',
    track: 'song name',
    artist: 'artist name'
  };


  playPause(url){
    this.audioObj.src = url;
    this.audioObj.load();
    this.audioObj.play();
    let playBtn = document.querySelector('.button__play');
    playBtn.innerHTML = '<i class="fa fa-pause"></i>';
  }

  playPause2(url){
    let count = 0;
    if (count === 0) {
        count = 1;
        this.audioObj.src = url;
        this.audioObj.play();
        console.log('Dale al play');
        console.log(count);
    }else{
      this.audioObj.pause();
      console.log('Dale al pause');
    }
  }

  playPause3(url){
    if  (this.audioObj.paused){
      this.audioObj.src = url;
      this.audioObj.play();
      let playBtn = document.querySelector('.button__play');
      playBtn.innerHTML = '<i class="fa fa-pause"></i>';
      console.log('dale al play');
      console.log();
    } else{
      this.audioObj.pause();
      let playBtn = document.querySelector('.button__play');
      playBtn.innerHTML = '<i class="fa fa-play"></i>';
      console.log('dale al pause');
      console.log(this.audioObj.currentTime);
    }
  }


  stop(){
    this.audioObj.pause();
    this.audioObj.currentTime = 0;
    console.log('play song!!');
  }

  next(){

  }

  previous(){

  }


  constructor() {

  }

  ngOnInit(): void {
  }

}
