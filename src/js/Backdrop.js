import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import themes from '../styles/Themes.js';

const {primary, secondary} = themes.backdrop;

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundImage: `linear-gradient(45deg, ${primary} 0%, ${secondary} 100%)`,
        '&.dark': {filter: 'brightness(0.7)'},
        transition: '0.5s'
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