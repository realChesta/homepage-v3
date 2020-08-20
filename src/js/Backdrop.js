import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import themes from '../styles/Themes.js';

const color1 = '#fa709a';
const color2 = '#fee140';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%'
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
        '&:not(dark)': {
            backgroundImage: `linear-gradient(to right, ${color1} 0%, ${color2} 100%)`
        },
        '&.dark': {
            backgroundImage: `linear-gradient(to right, ${color1} 0%, ${color2} 100%)`,
            filter: 'brightness(0.7)'
        },
    },
}));


const Backdrop = props => {
    const classes = useStyles();

    let bgClass = classes.background;
    if (themes.isDarkTheme()) {
        bgClass += ' dark';
    }

    return (
        <div className={classes.root}>
            <div className={bgClass}/>
            {props.children}
        </div>
    );
};

Backdrop.propTypes = {
    children: PropTypes.node
};

export default Backdrop;