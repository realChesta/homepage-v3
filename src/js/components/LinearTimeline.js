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
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import moment from "moment";
import CardActions from "@material-ui/core/CardActions";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(theme => ({
    oppositeContent: {
        flex: 'unset',
        width: '3em'
    },
    separator: {
        transform: 'translateY(0.25em)'
    },
    itemTitle: {
        fontWeight: 600
    },
    itemDescription: {
        lineHeight: '1.1em'
    },
    itemFooter: {
        justifyContent: 'space-between',
        paddingTop: 0,
        marginLeft: theme.spacing(1)
    },
    iconTextContainer: {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.text.secondary
    },
    iconTextTypo: {
        marginLeft: theme.spacing(0.5)
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
                <EventCard event={item}/>
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
    disconnected: PropTypes.bool
};

const IconText = props => {
    const classes = useStyles();
    return (
        <div className={classes.iconTextContainer}>
            <Icon color="inherit" className="material-icons-outlined">{props.icon}</Icon>
            <Typography color="inherit" className={classes.iconTextTypo}>
                {props.children}
            </Typography>
        </div>
    );
};

export const EventCard = props => {
    const classes = useStyles();
    const item = props.event;

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography color="primary" className={classes.itemTitle}>
                    {item.title}
                </Typography>
                <Typography className={classes.itemDescription}>
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions className={classes.itemFooter}>
                <Typography color="textSecondary">{item.duration}</Typography>
                <IconText icon="place">{item.location}</IconText>
            </CardActions>
        </Card>
    );
};

const Now = () => {
    const classes = useStyles();
    return (
        <TimelineItem>
            <TimelineOppositeContent className={classes.oppositeContent}>
                <Typography>
                    now
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator className={classes.separator}>
                <TimelineDot variant="outlined"/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                <Typography>{moment().format("MMMM YYYY")}</Typography>
            </TimelineContent>
        </TimelineItem>
    );
}

export default LinearTimeline;