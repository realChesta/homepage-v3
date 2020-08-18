import {createMuiTheme} from "@material-ui/core";

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
            main: '#b3506e'
        },
        secondary: {
            main: '#fee140'
        }
    },
    typography
});

const getCurrentTheme = () => {
    return lightTheme;
};

export default {
    getCurrentTheme
}