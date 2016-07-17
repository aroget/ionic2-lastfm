import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../config/app.config';

@Injectable()
export class ArtistList {
  url: string;
  method: string;

  constructor(private http: Http) {
    this.url = 'http://ws.audioscrobbler.com/2.0/';
    this.method = `?method=geo.gettopartists&api_key=${AppConfig.API_KEY}&format=json`;
  }

  getArtist(country: string) {
    let search = new URLSearchParams();
    search.append('country', country)
    return this.http.get(`${this.url}${this.method}`, { search })
                    .map((res) => res.json().topartists.artist);
  }

}

