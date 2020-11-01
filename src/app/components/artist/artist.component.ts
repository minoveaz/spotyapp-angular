import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifuService } from '../../services/spotifu.service';



@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any = {};
  loading: boolean;
  imagenFondo: any = {};

  constructor( private router: ActivatedRoute,
               private spotify: SpotifuService) {
                this.loading = true;

                this.router.params.subscribe( params => {
                this.getArtist( params['id']);
                this.getTopTracks( params['id']);
    });
  }

  getArtist(id){
    this.loading = true;
    this.spotify.getArtist(id)
          .subscribe( artist => {
            console.log(artist);
            this.artist = artist;
            this.loading = false;
          });
  }

  getTopTracks( id: string){
    this.spotify.getTopTracks(id)
          .subscribe( topTracks => {
            console.log('top');
            console.log( topTracks);
            this.topTracks = topTracks;
          });
  }



  ngOnInit(): void {
  }

}
