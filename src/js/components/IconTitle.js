import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.5em',
        fontWeight: 300,
        marginBottom: '1em',
        color: theme.palette.primary.main
    },
    title: {
        marginLeft: '0.25em'
    }
}));

const IconTitle = props => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Icon style={{fontSize: 'inherit'}}>{props.icon}</Icon>
            <label className={classes.title}>
                {props.children}
            </label>
        </div>
    );
};

export default IconTitle;