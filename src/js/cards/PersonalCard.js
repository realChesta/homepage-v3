import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconTitle from "../components/IconTitle.js";
import CardWrapper from "../components/CardWrapper.js";
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import { fade } from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme.js";

const useStyles = makeStyles(theme => ({
    gridHeader: {
        fontWeight: 700,
        textAlign: 'right'
    },
    chipContainer: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    chip: {
        marginRight: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
        color: theme.palette.background.paper,
        textTransform: 'lowercase'
    },
    mail: {
        color: theme.palette.primary.main,
        textDecoration: 'none'
    },
}));

const PersonalCard = props => {
    return (
        <CardWrapper>
            <Card>
                <CardContent>
                    <IconTitle icon="person">
                        Personal Details
                    </IconTitle>
                    <Grid container spacing={2}>
                        <GridHeader>Name</GridHeader>
                        <GridValue>{props.data.name}</GridValue>
                        <GridHeader>E-Mail</GridHeader>
                        <GridValue>
                            {props.data.emails.map(email => (
                                <>
                                    <Mail>{email}</Mail>
                                    <br />
                                </>
                            ))}
                        </GridValue>
                        <GridHeader>Languages</GridHeader>
                        <GridValue>
                            {props.data.languages.map(lang => (
                                <GridChip level={lang.level} label={lang.hint}>{lang.name}</GridChip>
                            ))}
                        </GridValue>
                        <GridHeader>Preferred Programming Languages</GridHeader>
                        <GridValue>
                            {props.data.programming.map(lang => (
                                <GridChip level={lang.level} label={lang.hint}>{lang.name}</GridChip>
                            ))}
                        </GridValue>
                        <GridHeader>Security Expertise</GridHeader>
                        <GridValue>
                            {props.data.security.map(exp => (
                                <GridChip level={exp.level} label={exp.hint}>{exp.name}</GridChip>
                            ))}
                        </GridValue>
                    </Grid>
                </CardContent>
            </Card>
        </CardWrapper>
    );
};

const GridHeader = props => {
    const classes = useStyles();
    return (
        <Grid item xs={5} className={classes.gridHeader}>
            {props.children}
        </Grid>
    );
};

const GridValue = props => {
    return (
        <Grid item xs={7}>
            {props.children}
        </Grid>
    )
};

const Mail = props => {
    const classes = useStyles();
    return (
        <a className={classes.mail} href={`mailto:${props.children}`}>
            {props.children}
        </a>
    );
};

const GridChip = props => {
    const classes = useStyles();
    const theme = useTheme();

    let color = theme.palette.primary.main;
    switch (props.level) {
        case 1:
            color = null;
            break;
        case 2:
            color = fade(color, 0.6);
            break;
    }

    const chip =
        <Chip
            label={props.children}
            size="small"
            className={classes.chip}
            color="primary"
            style={{ backgroundColor: color }}
        />;

    if (props.label) {
        return <Tooltip title={props.label}>{chip}</Tooltip>;
    }
    else return chip;
};

PersonalCard.propTypes = {};

export default PersonalCard;