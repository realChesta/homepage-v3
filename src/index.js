import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./js/Home.js";
import {ThemeProvider} from "@material-ui/core/styles";
import themes from "./styles/Themes.js";

const Root = () => {
    const [darkMode, setDarkMode] = useState(themes.isDarkTheme());
    themes.onThemeChange(enable => {
        setDarkMode(enable);
    });

    return (
        <ThemeProvider theme={themes.getCurrentTheme()}>
            <Home/>
        </ThemeProvider>
    );
};

ReactDOM.render(<Root/>,
    document.getElementById('root')
);
