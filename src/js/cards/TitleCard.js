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

const useStyles = makeStyles(theme => ({
    cardRoot: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        display: 'flex',
        overflow: 'hidden'
    },
    cardActions: {
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
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

    return (
        <CardWrapper>
            <Card className={classes.cardRoot}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h2" className={classes.helloTypo}>
                        Hello!
                    </Typography>
                    <Typography className={classes.titleText}>
                        I'm Kyrill, a {getMyAge()} year old third year
                        informatics student at the University of Zurich.
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Tooltip title="My GitHub" placement="right">
                        <IconButton target="_blank" href="https://github.com/realChesta">
                            <SvgIcon>
                                <InlineSVG src={GithubIcon}/>
                            </SvgIcon>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Shoot me an E-Mail!" placement="right">
                        <IconButton target="_blank" href="mailto:kyrill.hux@gmail.com">
                            <MailIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Matura Paper "SoNNic"' placement="right">
                        <IconButton target="_blank" href="http://khux.ch/mng/sonnic">
                            <SvgIcon>
                                <InlineSVG src={SonnicIcon}/>
                            </SvgIcon>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="My Rocket League Tracker" placement="right">
                        <IconButton target="_blank" href="https://rocketleague.tracker.network/profile/steam/realchesta">
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