import { Component, OnInit } from '@angular/core';
import { SpotifuService } from '../../services/spotifu.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  artists: any [] = [];
  loading: boolean;

  constructor( private spotify: SpotifuService) {
  }

  search(termino: string){
    console.log(termino);
    this.loading = true;
    this.spotify.getArtists(termino)
          .subscribe((data: any) => {
            console.log(data);
            this.artists = data;
            this.loading = false;
          });
  }

  ngOnInit(): void {
  }

}
