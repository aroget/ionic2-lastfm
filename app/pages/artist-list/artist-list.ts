import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { ArtistDetailPage, SettingsPage } from '../';

import { GET_SETTINGS, SettingsInterface } from '../../settings.reducer';

import { Artist } from '../../interfaces';
import { ArtistList } from '../../providers';

@Component({
  templateUrl: 'build/pages/artist-list/artist-list.html',
  providers: [ ArtistList ]
})

export class ArtistListPage {
  artists: Array<Artist> = [];
  settings: any;

  constructor(
    private nav: Nav,
    private service: ArtistList,
    private store: Store<SettingsInterface>
  ) {
    this.store.select('settingsReducer')
              .subscribe(
                (res) => {
                  this.settings = res
                  this.getData();
                },
                (err) => console.log(err)
              )
  }

  getData() {
    this.service.getArtist(this.settings.country)
                .subscribe(
                  (res) => {
                    this.artists = res;
                  },
                  (err) => console.log(err)
                );
  }

  onArtistDetails(artist) {
    this.nav.push(ArtistDetailPage, { artist });
  }

  goToSettingsPage() {
    this.nav.push(SettingsPage);
  }

}
