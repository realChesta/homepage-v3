import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";

const useStyles = makeStyles(theme => ({
    cardWrapper: {
        flexShrink: 0,
        margin: theme.spacing(1),
        width: '32em',
        maxWidth: `calc(100vw - ${theme.spacing(4)}px)`
    }
}));

const CardWrapper = props => {
    const classes = useStyles();

    return (
        <div className={classes.cardWrapper}>
            {props.children}
        </div>
    );
};

CardWrapper.propTypes = {
    children: PropTypes.node
};

export default CardWrapper;