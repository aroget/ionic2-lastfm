import { Component } from '@angular/core';
import { NavController, Nav, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { ArtistDetailPage } from '../';

import { TagList } from '../../providers';

@Component({
  templateUrl: 'build/pages/tag-list/tag-list.html',
  providers: [ TagList ]
})

export class TagListPage {
  artists: Array<any> = [];
  tag: string;
  settings: any;

  constructor(
    private nav: Nav,
    private service: TagList,
    private store: Store<any>,
    private navParams: NavParams
  ) {
    this.store.select('settingsReducer')
              .subscribe(
                (res) => this.settings = res,
                (err) => console.log(err)
              )

    this.service.getTopArtistsByTag(this.navParams.get('tag'), this.settings.country)
                .subscribe(
                  (res) => {
                    console.log(res);
                    this.tag = res['@attr'].tag;
                    this.artists = res.artist;
                  },
                  (err) => console.log(err)
                )
  }

  onArtistDetails(artist) {
    this.nav.push(ArtistDetailPage, { artist });
  }

}
