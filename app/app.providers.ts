import { Store, provideStore } from '@ngrx/store';
import { settingsReducer } from './settings.reducer';


export const APP_PROVIDERS = provideStore({
    settingsReducer
});
