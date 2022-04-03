import React, {useState} from "react";
import moment from "moment";
import Tooltip from "@material-ui/core/Tooltip";
import {Typography} from "@material-ui/core";
import BulletList from "./BulletList";
import Card from "@material-ui/core/Card";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import IconButton from "@material-ui/core/IconButton";
import RoundIcon from "./RoundIcon";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import CardActions from "@material-ui/core/CardActions";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LineIcon from "./LineIcon";
import PropTypes from 'prop-types';
import GradDetails from "./GradDetails";

const useStyles = makeStyles(theme => ({
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
    }
}));

export const EventCard = props => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const item = props.event;
    let details;

    const expandProps = item.details ? {} : {style: {cursor: 'default'}};

    const formatSingleDate = s => {
        let resMom;
        let resStr;
        if (isNaN(s)) {
            resMom = moment(s);
            resStr = resMom.format("MMM. YYYY")
        } else if (s === -1) {
            resMom = moment();
            resStr = "present";
        } else {
            resMom = moment(s.toString());
            resStr = s.toString();
        }

        if (resMom.isAfter()) {
            resMom = moment();
            resStr = "present";
        }

        return [resMom, resStr];
    }
    const customFormatTimespan = span => {
        let months = span.months();
        let years = span.years();
        let res = `${span.months()} month`;
        if (months > 1) {
            res += 's';
        }
        if (years > 0) {
            let add = `${years} year `;
            if (years > 1) {
                add += 's';
            }
            res = add + res;
        }
        return res;
    };
    const formatDuration = duration => {
        let from = formatSingleDate(duration[0]);
        let to = formatSingleDate(duration[1]);

        let res = `${from[1]} - ${to[1]}`;
        if (props.duration) {
            let diff = moment.duration(to[0].diff(from[0]));
            res = (
                <Tooltip title={customFormatTimespan(diff)} placement="left">
                    <Typography>{res}</Typography>
                </Tooltip>
            );
        }
        return res;
    };

    const handleExpandClick = () => {
        if (item.details) {
            setExpanded(!expanded);
        }
    }

    if (item.details) {
        switch (item.details.type) {
            case "bullet-list":
                details = <BulletList>{item.details.data}</BulletList>;
                break;
            case "grad-details":
                details = <GradDetails details={item.details.data}/>;
                break;
            case "text":
            default:
                details = <Typography color="textSecondary">{item.details.data}</Typography>;
                break;
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
                    {details}
                </AccordionDetails>
            </Accordion>
            <CardActions className={classes.itemFooter}>
                <Typography color="textSecondary" component="div">
                    {formatDuration(item.duration)}
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

EventCard.propTypes = {
    event: PropTypes.object,
    duration: PropTypes.bool
}

export default EventCard;