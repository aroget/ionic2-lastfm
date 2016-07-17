import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../config/app.config';

@Injectable()
export class ArtistDetail {
    url: string;
    method: string;

    constructor(private http: Http) {
      this.url = 'http://ws.audioscrobbler.com/2.0/';
      this.method = `?method=artist.getinfo&api_key=${AppConfig.API_KEY}&format=json`;
    }

    getInfo(artist) {
      let search = new URLSearchParams();
      search.append('artist', artist)

      return this.http.get(`${this.url}${this.method}`, { search })
                      .map((res) => res.json().artist);
    }

}

