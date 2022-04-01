import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineContent from "@material-ui/lab/TimelineContent";
import {Typography} from "@material-ui/core";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import moment from "moment";
import EventCard from "./EventCard";

const useStyles = makeStyles(theme => ({
    oppositeContent: {
        flex: 'unset',
        width: '3em'
    },
    separator: {
        transform: 'translateY(0.25em)'
    },
    lastConnector: {
        background: `linear-gradient(180deg, ${theme.palette.grey[400]} 25%, transparent 100%)`
    }
}));

const LinearTimeline = props => {
    const classes = useStyles();

    let events = props.items.map((item, index) =>
        <TimelineItem key={index}>
            <TimelineOppositeContent className={classes.oppositeContent}>
                <Typography color="textSecondary">
                    {item.year}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator className={classes.separator}>
                <TimelineDot variant="outlined" color="primary"/>
                <TimelineConnector
                    className={index === 0 ? classes.lastConnector : null}
                />
            </TimelineSeparator>
            <TimelineContent>
                <EventCard event={item} duration={props.duration}/>
            </TimelineContent>
        </TimelineItem>
    );

    if (props.nowItem) {
        events.push(<Now key="now"/>);
    }

    // newest items should be displayed first
    events.reverse();

    return (
        <Timeline align="left">
            {events}
        </Timeline>
    );
}

LinearTimeline.propTypes = {
    items: PropTypes.array.isRequired,
    nowItem: PropTypes.bool,
    disconnected: PropTypes.bool,
    duration: PropTypes.bool
};

const Now = () => {
    const classes = useStyles();
    return (
        <TimelineItem>
            <TimelineOppositeContent className={classes.oppositeContent}>
                <Typography style={{transition: '0s'}}>
                    now
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator className={classes.separator}>
                <TimelineDot variant="outlined"/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                <Typography style={{transition: '0s'}}>
                    {moment().format("MMMM YYYY")}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    );
}

export default LinearTimeline;