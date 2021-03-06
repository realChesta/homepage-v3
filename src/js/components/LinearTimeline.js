import React, {useState} from 'react';
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
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import moment from "moment";
import CardActions from "@material-ui/core/CardActions";
import Icon from "@material-ui/core/Icon";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import RoundIcon from "./RoundIcon.js";
import LineIcon from "./LineIcon.js";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
    oppositeContent: {
        flex: 'unset',
        width: '3em'
    },
    separator: {
        transform: 'translateY(0.25em)'
    },
    itemTitle: {
        fontWeight: 600,
        lineHeight: '1em',
        marginBottom: '0.2em',
        flexGrow: 1,
        alignSelf: 'flex-end'
    },
    itemTitleContainer: {
        display: 'flex',
        width: '100%'
    },
    itemExpandIcon: {
        marginTop: -theme.spacing(1),
        marginRight: -theme.spacing(0.4),
        padding: 0,
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        '&.expanded': {
            transform: 'rotate(180deg)',
        }
    },
    itemDescription: {
        lineHeight: '1.1em',
        whiteSpace: 'pre-line'
    },
    itemFooter: {
        justifyContent: 'space-between',
        flexWrap: 'wrap',
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
            <LineIcon color="inherit">{props.icon}</LineIcon>
            <Typography color="inherit" className={classes.iconTextTypo}>
                {props.children}
            </Typography>
        </div>
    );
};

export const EventCard = props => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const item = props.event;

    const expandProps = item.details ? {} : {style: {cursor: 'default'}};

    const handleExpandClick = () => {
        if (item.details) {
            setExpanded(!expanded);
        }
    }

    return (
        <Card variant="outlined">
            <Accordion
                elevation={0}
                {...expandProps}
                expanded={expanded}
            >
                <AccordionSummary
                    {...expandProps}
                    onClick={() => handleExpandClick()}
                >
                    <div style={{width: '100%'}}>
                        <div className={classes.itemTitleContainer}>
                            <Typography color="primary" className={classes.itemTitle}>
                                {item.title}
                            </Typography>
                            {!!item.details &&
                                <IconButton
                                    edge="end"
                                    component="div"
                                    tabIndex={null}
                                    role={null}
                                    className={`${classes.itemExpandIcon} ${expanded && 'expanded'}`}
                                >
                                    <RoundIcon>expand_more</RoundIcon>
                                </IconButton>
                            }
                        </div>
                        <Typography className={classes.itemDescription} style={{transition: '0s'}}>
                            {item.description}
                        </Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {item.details}
                </AccordionDetails>
            </Accordion>
            <CardActions className={classes.itemFooter}>
                <Typography color="textSecondary">
                    {item.duration}
                </Typography>
                <div style={{marginLeft: 'auto'}}>
                    <IconText icon="place">
                        {item.location}
                    </IconText>
                </div>
            </CardActions>
        </Card>
    );
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