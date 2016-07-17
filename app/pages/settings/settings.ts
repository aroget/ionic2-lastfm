import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { GET_SETTINGS,
         UPDATE_SETTINGS,
         SettingsInterface } from '../../settings.reducer';

/*
  Generated class for the SettingsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {
  settings: SettingsInterface;
  darkTheme: boolean;
  country: string;

  constructor(
    private nav: NavController,
    private store: Store<SettingsInterface>
  )
  {
    this.store.select('settingsReducer')
              .subscribe(
                (res: any) => {
                  this.darkTheme = res.darkTheme;
                  this.country = res.country;
                },
                (err) => console.log(err)
              )
  }

  onUpdateSettings() {
    this.store.dispatch({
      type: UPDATE_SETTINGS,
      payload: {
        darkTheme: this.darkTheme,
        country: this.country
      }
    })
  }

}
