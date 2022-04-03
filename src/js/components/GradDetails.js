import React from 'react';
import PropTypes from 'prop-types';
import {List} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LineIcon from "./LineIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    chip: {
        marginRight: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5)
    },
    bulletListItem: {
        width: '2em',
        minWidth: '2em',
        alignSelf: 'flex-start',
        marginTop: '4px'
    }
}));

const GradDetails = props => {
    const classes = useStyles();

    // let gpa;
    let gpa = (
        <ListItem disableGutters>
            <ListItemIcon className={classes.bulletListItem}>
                <LineIcon color="primary">school</LineIcon>
            </ListItemIcon>
            {props.details.honors ?
                <ListItemText
                    primary={`GPA ${props.details.gpa}`}
                    secondary={`with honors ${props.details.honors}`}
                /> :
                <ListItemText
                    primary={props.details.gpa}
                    secondary="grade point average"
                />
            }
        </ListItem>
    );

    return (
        <List dense disablePadding style={{width: '100%'}}>
            {gpa}
            <ListItem disableGutters>
                <ListItemIcon className={classes.bulletListItem}>
                    <LineIcon color="primary">description</LineIcon>
                </ListItemIcon>
                <ListItemText
                    primary={props.details.thesis}
                    secondary="Bachelor Thesis"
                />
            </ListItem>
        </List>
    );
};

GradDetails.propTypes = {
    details: PropTypes.object
};

export default GradDetails;