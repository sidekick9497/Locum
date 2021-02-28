import * as ActionTypes from '../ActionTypes';
import {Appearance} from 'react-native-appearance'
const darkTheme = {
    background: '#000000',
    text: '#ffffff',
    primary: '#1266F1',
    secondary: '#B23CFD',
    success: '#00B74A',
    danger: '#F93154',
    warning: 'FFA900',
    info: '#39C0ED',
    light: '#FBFBFB',
    dark: '#262626'
}

const lightTheme = {
    background: '#000000',
    text: '#ffffff',
    primary: '#1266F1',
    secondary: '#B23CFD',
    success: '#00B74A',
    danger: '#F93154',
    warning: 'FFA900',
    info: '#39C0ED',
    light: '#FBFBFB',
    dark: '#262626'
}

// create dark and light themes and initial value can be picked from os using react-native-appearance to apply os theme

export const themeReducer = (state = darkTheme, action) => {

    switch (action.type) {
        case ActionTypes.APP_THEME:
            return { ...state, current: action.payload }
        default:
            return state;
    }
}