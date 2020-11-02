import { Component, OnInit } from '@angular/core';
import { SpotifuService } from 'src/app/services/spotifu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(  private spotify: SpotifuService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        this.newSongs = data;
        this.loading = false;
      }, ( errorServicio ) => {
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
        this.loading = false;
      });
  }

  ngOnInit(): void {
  }

}
