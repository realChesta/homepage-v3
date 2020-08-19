import {createMuiTheme} from "@material-ui/core";
import {light} from "@material-ui/core/styles/createPalette.js";

const typography = {
    fontFamily: [
        'Nunito',
        'sans-serif'
    ]
};

export const lightTheme = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: '#cc667c'
        },
        secondary: {
            main: '#fee140'
        }
    },
    typography
});

export const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: '#fa709a'
        },
        secondary: {
            main: '#fee140'
        }
    },
    typography
});

const getCurrentTheme = () => isDarkTheme() ? darkTheme : lightTheme;

const setDarkTheme = (enable) => {
    localStorage.setItem('darkMode', enable);
    if (themeCallback) {
        themeCallback(enable);
    }
};
const isDarkTheme = () => localStorage.getItem('darkMode') === 'true';

let themeCallback;
let onThemeChange = (callback) => {
    themeCallback = callback;
};

export default {
    getCurrentTheme,
    isDarkTheme,
    setDarkTheme,
    onThemeChange
}