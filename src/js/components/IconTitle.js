import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import Icon from "@material-ui/core/Icon";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

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
        fontWeight: 300
    }
}));

const IconTitle = props => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Icon style={{fontSize: 'inherit'}} className="material-icons-round">
                {props.icon}
            </Icon>
            <Typography color="inherit" className={classes.title}>
                {props.children}
            </Typography>
        </div>
    );
};

IconTitle.propTypes = {
    icon: PropTypes.string
};

export default IconTitle;