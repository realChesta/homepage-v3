import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./js/Home.js";
import themes from './styles/Themes.js';
import {ThemeProvider} from '@material-ui/core/styles';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={themes.getCurrentTheme()}>
            <Home/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
