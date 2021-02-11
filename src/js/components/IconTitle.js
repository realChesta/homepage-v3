import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import RoundIcon from "./RoundIcon.js";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.5em',
        marginBottom: '1em',
        color: theme.palette.primary.main
    },
    title: {
        marginLeft: '0.25em',
        fontSize: 'inherit',
        fontWeight: 300,
    },
    containerSub: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.2em',
        color: theme.palette.text.secondary
    }
}));

const IconTitle = props => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <RoundIcon style={{fontSize: 'inherit'}}>
                {props.icon}
            </RoundIcon>
            <Typography color="inherit" className={classes.title}>
                {props.children}
            </Typography>
        </div>
    );
};

IconTitle.propTypes = {
    icon: PropTypes.string
};

export const IconSubTitle = props => {
    const classes = useStyles();
    return (
        <div className={classes.containerSub}>
            <RoundIcon style={{fontSize: 'inherit'}}>
                {props.icon}
            </RoundIcon>
            <Typography color="inherit" className={classes.title}>
                {props.children}
            </Typography>
        </div>
    );
}

IconSubTitle.propTypes = {
    icon: PropTypes.string
};

export default IconTitle;