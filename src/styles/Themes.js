import {createMuiTheme} from "@material-ui/core";

const typography = {
    fontFamily: [
        'Nunito',
        'sans-serif'
    ]
};

const rootTransition = {root: {transition: 'background-color 0.5s, color 0.5s'}};
const overrides = {
    MuiPaper: rootTransition,
    MuiCard: rootTransition,
    MuiCardActions: rootTransition,
    MuiChip: rootTransition,
    MuiTypography: rootTransition,
    MuiIcon: rootTransition,
    MuiListItemText: {primary: {transition: '0s'}}
};

export const lightTheme = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: '#cc667c'
        },
        secondary: {
            main: '#fa0'
        }
    },
    typography,
    overrides
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
    typography,
    overrides
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