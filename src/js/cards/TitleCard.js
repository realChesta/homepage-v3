import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import {getMyAge} from "../utils.js";
import IconButton from "@material-ui/core/IconButton";
import InlineSVG from "react-inlinesvg";
import SonnicIcon from '../../img/sonnic.svg';
import GithubIcon from '../../img/github.svg';
import SvgIcon from "@material-ui/core/SvgIcon";
import MailIcon from '@material-ui/icons/Mail';
import Tooltip from "@material-ui/core/Tooltip";
import Card from "@material-ui/core/Card";

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
    }
}));

const TitleCard = props => {
    const classes = useStyles();

    return (
        <Grid item xs={3}>
            <Card className={classes.cardRoot}>
                <CardContent>
                    <Typography variant="h2">Hello.</Typography>
                    <Typography variant="p">
                        I'm Kyrill, a {getMyAge()} year old third year
                        informatics student at the University of Zurich.
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Tooltip title="My GitHub" placement="right">
                        <IconButton>
                            <SvgIcon>
                                <InlineSVG src={GithubIcon}/>
                            </SvgIcon>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Shoot me an E-Mail!" placement="right">
                        <IconButton>
                            <MailIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Matura Paper "SoNNic"' placement="right">
                        <IconButton>
                            <SvgIcon>
                                <InlineSVG src={SonnicIcon}/>
                            </SvgIcon>
                        </IconButton>
                    </Tooltip>

                    <IconButton>

                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

TitleCard.propTypes = {};

export default TitleCard;