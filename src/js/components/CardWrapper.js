import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";

const useStyles = makeStyles(theme => ({
    cardWrapper: {
        flexShrink: 0,
        margin: theme.spacing(2)
    }
}));

const CardWrapper = props => {
    const classes = useStyles();

    return (
        <div className={classes.cardWrapper} style={{width: props.width}}>
            {props.children}
        </div>
    );
};

CardWrapper.propTypes = {
    children: PropTypes.node
};

export default CardWrapper;