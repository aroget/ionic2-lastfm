import { Action, ActionReducer } from '@ngrx/store';

export const DEFAULT_SETTINGS = 'DEFAULT_SETTINGS';
export const GET_SETTINGS = 'GET_SETTINGS';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

export interface SettingsInterface {
    darkTheme: boolean;
    country: string;
}

const initialState: SettingsInterface = {
    darkTheme: false,
    country: 'Canada'
}

export const settingsReducer = (state:SettingsInterface = initialState, action: Action ) => {
    switch (action.type) {
        case GET_SETTINGS:
            return state;
        case DEFAULT_SETTINGS:
            return initialState;
        case UPDATE_SETTINGS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}