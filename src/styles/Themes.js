import {createMuiTheme} from "@material-ui/core";

export const lightTheme = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: '#b3506e'
        },
        secondary: {
            main: '#fee140'
        }
    }
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
    }
});

const getCurrentTheme = () => {
    return lightTheme;
}

export default {
    getCurrentTheme
}