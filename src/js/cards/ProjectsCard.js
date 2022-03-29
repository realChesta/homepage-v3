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
import useTheme from "@material-ui/core/styles/useTheme.js";
import RoundIcon from "../components/RoundIcon.js";

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

const ProjectsCard = props => {
    const theme = useTheme();
    const items = props.projects.map(p =>
        <Project
            title={p.title}
            description={p.description}
            github={p.github}
            site={p.site}
        />
    );

    return (
        <CardWrapper>
            <Card>
                <CardContent style={{paddingBottom: theme.spacing(1)}}>
                    <IconTitle icon="layers">Some of my Personal Projects</IconTitle>
                    <Typography style={{
                        transition: '0s',
                        paddingLeft: theme.spacing(2),
                        paddingRight: theme.spacing(2)
                    }}>
                        This is a selection of a few personal projects I've worked on.
                        You can find more on my GitHub (see top).
                    </Typography>
                    <List>
                        {items}
                    </List>
                </CardContent>
            </Card>
        </CardWrapper>
    );
};

ProjectsCard.propTypes = {
    projects: PropTypes.object
};

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
                        <RoundIcon>public</RoundIcon>
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