import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardWrapper from "../components/CardWrapper.js";
import IconTitle from "../components/IconTitle.js";
import {Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import InlineSVG from "react-inlinesvg";
import GithubIcon from '../../img/github.svg';
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import {Public} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    projectRoot: {
        flexDirection: 'column',
        paddingTop: 0,
        paddingBottom: 0
    },
    projectActionContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginLeft: theme.spacing(1)
    },
    projectTitle: {
        color: theme.palette.primary.main,
        fontWeight: 600
    }
}));

const ProjectsCard = () => {
    return (
        <CardWrapper>
            <Card>
                <CardContent>
                    <IconTitle icon="layers">Some of my Personal Projects</IconTitle>
                    <Typography style={{transition: '0s'}}>
                        This is a selection of a few personal projects I've worked on.
                        You can find more on my GitHub (see top).
                    </Typography>
                    <br/>
                    <List>
                        <Project
                            title="SoNNic"
                            description="A machine learning algorithm that autonomously learns to play the first level of Sonic the Hedgehog using neuroevolution."
                            github="https://github.com/realChesta/SoNNic"
                            site="https://khux.ch/mng/sonnic"
                        />
                        <Project
                            title="Frantic"
                            description="An online implementation of the swiss card game Frantic (similar to UNO), created in a team of 5 for a university project."
                            github="https://github.com/soprafs20-group09/frantic-client"
                            site="http://frantic.online"
                        />
                        <Project
                            title="Plymouth-Pokemon"
                            description="A shell script that generates a Plymouth theme showing a randomly chosen Pokemon jumping until the boot process is finished. It allows you to enjoy a new Pokemon on every boot!"
                            github="https://github.com/realChesta/plymouth-pokemon"
                        />
                        <Project
                            title="SyncPad"
                            description="An online text editor written using react.js with real-time collaboration, allowing multiple users to work on the same file simultaneously."
                            github="https://github.com/realChesta/syncpad"
                        />
                    </List>
                </CardContent>
            </Card>
        </CardWrapper>
    );
};

ProjectsCard.propTypes = {};

const Github = () => (
    <SvgIcon>
        <InlineSVG src={GithubIcon}/>
    </SvgIcon>
);

const Project = props => {
    const classes = useStyles();
    return (
        <ListItem className={classes.projectRoot}>
            <ListItemText
                primary={props.title}
                secondary={props.description}
                classes={{primary: classes.projectTitle}}
            />
            <div className={classes.projectActionContainer}>
                {props.site &&
                <Tooltip title="Visit Project Site">
                    <IconButton
                        target="_blank"
                        href={props.site}
                        color="primary"
                    >
                        <Public/>
                    </IconButton>
                </Tooltip>}
                {props.github &&
                <Tooltip title="Visit on Github">
                    <IconButton
                        target="_blank"
                        href={props.github}
                        color="primary"
                    >
                        <Github/>
                    </IconButton>
                </Tooltip>}
            </div>
        </ListItem>
    );
}

Project.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    github: PropTypes.string,
    site: PropTypes.string
}

export default ProjectsCard;