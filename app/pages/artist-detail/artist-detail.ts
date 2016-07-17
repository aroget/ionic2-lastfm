import { Component, OnInit } from '@angular/core';
import { Nav, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

import { TagListPage } from '../';

import { Artist,
         ArtistDetailInterface } from '../../interfaces';

import { ArtistDetail } from '../../providers';

@Component({
  templateUrl: 'build/pages/artist-detail/artist-detail.html',
  providers: [ ArtistDetail ],
})
export class ArtistDetailPage implements OnInit {
  artist: ArtistDetailInterface;
  data: boolean = false;

  constructor(
    private nav: Nav,
    private navParams: NavParams,
    private service: ArtistDetail
  )
  { }

  ngOnInit() {
      this.service.getInfo(this.navParams.get('artist').name)
                  .subscribe(
                    (res) => this.artist = res,
                    (err) => console.log(err)
                 );
  }

  onGoToRelated(artist) {
    this.nav.push(ArtistDetailPage, { artist })
  }

  onGoToArtistByTag(tag) {
    this.nav.push(TagListPage, { tag })
  }

}
