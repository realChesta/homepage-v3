import React from 'react';
import PropTypes from 'prop-types';
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import {Typography} from "@material-ui/core";
import {getMyAge} from "../utils.js";
import IconButton from "@material-ui/core/IconButton";
import InlineSVG from "react-inlinesvg";
import SonnicIcon from '../../img/sonnic.svg';
import GithubIcon from '../../img/github.svg';
import RocketLeagueIcon from '../../img/rocket-league.svg';
import SvgIcon from "@material-ui/core/SvgIcon";
import MailIcon from '@material-ui/icons/Mail';
import Tooltip from "@material-ui/core/Tooltip";
import Card from "@material-ui/core/Card";
import CardWrapper from "../components/CardWrapper.js";
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import themes from "../../styles/Themes.js";

const useStyles = makeStyles(theme => ({
    cardRoot: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main,
        display: 'flex',
        overflow: 'hidden',
        '&:not(.dark)': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.background.paper
        },
        '&.dark': {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.primary.main,
        }
    },
    cardActions: {
        flexDirection: 'column',
        '&:not(dark)': {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.secondary
        },
        '&.dark': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.background.paper,
        },
        '& > :not(first-child)': {
            margin: '0 !important'
        }
    },
    cardContent: {
        flexGrow: 1
    },
    helloTypo: {
        fontWeight: 300,
    },
    titleText: {
        fontWeight: 400
    }
}));

const TitleCard = () => {
    const classes = useStyles();

    let cardRootClass = classes.cardRoot;
    let cardActionsClass = classes.cardActions;

    if (themes.isDarkTheme()) {
        cardRootClass += ' dark';
        cardActionsClass += ' dark';
    }

    return (
        <CardWrapper>
            <Card className={cardRootClass}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h2" className={classes.helloTypo}>
                        Hello!
                    </Typography>
                    <Typography className={classes.titleText}>
                        I'm Kyrill, a {getMyAge()} year old third year
                        informatics student at the University of Zurich.
                    </Typography>
                </CardContent>
                <CardActions className={cardActionsClass}>
                    <Tooltip title="My GitHub" placement="right">
                        <IconButton target="_blank" href="https://github.com/realChesta" color="inherit">
                            <SvgIcon>
                                <InlineSVG src={GithubIcon}/>
                            </SvgIcon>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Shoot me an E-Mail!" placement="right">
                        <IconButton target="_blank" href="mailto:kyrill.hux@gmail.com" color="inherit">
                            <MailIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Matura Paper "SoNNic"' placement="right">
                        <IconButton target="_blank" href="http://khux.ch/mng/sonnic" color="inherit">
                            <SvgIcon>
                                <InlineSVG src={SonnicIcon}/>
                            </SvgIcon>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="My Rocket League Tracker" placement="right">
                        <IconButton target="_blank" href="https://rocketleague.tracker.network/profile/steam/realchesta"
                                    color="inherit">
                            <SvgIcon>
                                <InlineSVG src={RocketLeagueIcon}/>
                            </SvgIcon>
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        </CardWrapper>
    );
};

TitleCard.propTypes = {};

export default TitleCard;