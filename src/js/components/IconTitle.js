import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles.js";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.5em',
        marginBottom: '1em',
    },
    title: {
        marginLeft: '0.25em'
    }
}));

const IconTitle = props => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {props.icon}
            <label className={classes.title}>
                {props.children}
            </label>
        </div>
    );
};

export default IconTitle;