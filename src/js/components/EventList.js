import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import EventCard from "./EventCard";


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    item: {
        margin: theme.spacing(2)
    }
}));

const EventList = props => {
    const classes = useStyles();

    let events = props.items.map((item, index) => {
        return (
            <div className={classes.item} key={index}>
                <EventCard event={item} duration={props.duration}/>
            </div>
        );
    });

    // newest items should be displayed first
    events.reverse();

    return (
        <div className={classes.container}>
            {events}
        </div>
    );
};

EventList.propTypes = {
    items: PropTypes.array.isRequired,
    duration: PropTypes.bool
};

export default EventList;