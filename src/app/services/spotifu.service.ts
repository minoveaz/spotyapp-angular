import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifuService {

  constructor( private http: HttpClient) { }

  getQuery( query: string){

    const url = `https://api.spotify.com/v1/${ query}`;

    const headers = new HttpHeaders({
      Authorization : 'Bearer BQDlDrSfFZsqJlcxjpibJo_Qg8Q1_2hh6YxG97Dx-qYrbJixEPj66FvD95lqtt_jKE0toYDdzl_CO7Wfcz0'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases( ){

    return this.getQuery('browse/new-releases?Limit=20')
              .pipe( map( data =>  data['albums'].items));
  }

  getArtists( termino: string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
              .pipe( map( data => data['artists'].items));

  }

  getArtist( id: string){

    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks( id: string){

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
              .pipe( map( data => data['tracks']));
  }
}
