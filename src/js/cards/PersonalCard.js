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
        marginBottom: theme.spacing(0.5)
    },
    mail: {
        color: theme.palette.primary.main,
        textDecoration: 'none'
    },
}));

const PersonalCard = () => {
    return (
        <CardWrapper>
            <Card>
                <CardContent>
                    <IconTitle icon="person">
                        Personal Details
                    </IconTitle>
                    <Grid container spacing={2}>
                        <GridHeader>Name</GridHeader>
                        <GridValue>Kyrill Hux</GridValue>
                        <GridHeader>E-Mail</GridHeader>
                        <GridValue>
                            <Mail>kyrill.hux@gmail.com</Mail>
                            <br/>
                            <Mail>kyrill.hux@uzh.ch</Mail>
                        </GridValue>
                        <GridHeader>Languages</GridHeader>
                        <GridValue>
                            <GridChip color="primary" label="native">German</GridChip>
                            <GridChip color="primary" label="fluent">English</GridChip>
                            <GridChip color="primary" label="fluent">Russian</GridChip>
                            <GridChip label="basic">French</GridChip>
                        </GridValue>
                        <GridHeader>Preferred Programming Languages</GridHeader>
                        <GridValue>
                            <GridChip color="primary" label="React, node">JavaScript</GridChip>
                            <GridChip color="primary" label=".NET, WinForms, ...">C#</GridChip>
                            <GridChip color="primary">Python</GridChip>
                            <GridChip color="primary">Java</GridChip>
                        </GridValue>
                        <GridHeader>Security Expertise</GridHeader>
                        <GridValue>
                            <GridChip color="primary">Web</GridChip>
                            <GridChip>Windows</GridChip>
                            <GridChip>Linux</GridChip>
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

    const chip =
        <Chip
            label={props.children}
            size="small"
            color={props.color}
            className={classes.chip}
        />;

    if (props.label) {
        return <Tooltip title={props.label}>{chip}</Tooltip>;
    }
    else return chip;
};

PersonalCard.propTypes = {};

export default PersonalCard;