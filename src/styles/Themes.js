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
    MuiListItemText: {primary: {transition: '0s'}},
    MuiTimeline: {root: {paddingLeft: 0, paddingRight: 0}},
    MuiAccordion: rootTransition,
    MuiAccordionSummary: {
        root: {alignItems: 'flex-start'},
        content: {
            "&$expanded": {
                margin: "20px 0 8px"
            }
        }
    },
    MuiAccordionDetails: {root: {padding: '0 16px'}}
};

const backdrop = {
    primary: '#ff9393',
    secondary: '#e2cc95'
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
            main: '#ff809b'
        },
        secondary: {
            main: '#ffc44d'
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
    onThemeChange,
    backdrop
}