import React from 'react';
import PropTypes from 'prop-types';
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LineIcon from "./LineIcon.js";
import Chip from "@material-ui/core/Chip";
import makeStyles from "@material-ui/core/styles/makeStyles.js";

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

const BulletList = props => {
    const classes = useStyles();
    const items = [];

    for (let i of props.children) {
        const tags = [];
        if (i.tags) {
            for (let t of i.tags) {
                tags.push(
                    <Chip
                        className={classes.chip}
                        size="small"
                        variant="outlined"
                        label={t}
                        key={t}
                    />
                );
            }
        }

        items.push(
            <ListItem key={i} disableGutters>
                <ListItemIcon className={classes.bulletListItem}>
                    <LineIcon color="primary">{i.icon ?? 'chevron_right'}</LineIcon>
                </ListItemIcon>
                <ListItemText primary={i.text} secondary={tags}/>
            </ListItem>
        );
    }

    return (
        <List dense disablePadding style={{width: '100%'}}>
            {items}
        </List>
    );
};

BulletList.propTypes = {};

export default BulletList;