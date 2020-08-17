import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";

const color1 = '#fa709a';
const color2 = '#fee140';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%);'
    }
}));


const Backdrop = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {props.children}
        </div>
    );
};

Backdrop.propTypes = {
    children: PropTypes.node
};

export default Backdrop;