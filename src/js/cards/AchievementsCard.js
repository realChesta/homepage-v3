import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import CardWrapper from "../components/CardWrapper.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconTitle, {IconSubTitle} from "../components/IconTitle.js";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    inset: {
        margin: '0 1em'
    },
    aContainer: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(1)
    },
    aTitleContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0.5em'
    },
    aTitle: {
        maxWidth: '70%',
        flexGrow: '1',
        lineHeight: '1em',
    },
    aExtra: {
        flexGrow: '0',
        flexShrink: '0',
        lineHeight: '1em'
    },
    aDescription: {
        lineHeight: '1em'
    }
}));

const AchievementsCard = props => {
    const classes = useStyles();

    return (
        <CardWrapper>
            <Card>
                <CardContent>
                    <IconTitle icon="star">Achievements and Awards</IconTitle>
                    <div className={classes.inset}>
                        <IconSubTitle icon="code">Coding Competitions</IconSubTitle>
                        <Achievement
                            title="Google Hash Code 2018"
                            description="in a team of four"
                            extra="placed 81 / 4856"
                        />
                        <br/>
                        <IconSubTitle icon="stars">Awards</IconSubTitle>
                        <Achievement
                            title="Niklaus Wirth Young Talent Computer Science Award"
                            description="for matura paper 'SoNNic'"
                            extra="2017"
                        />
                    </div>
                </CardContent>
            </Card>
        </CardWrapper>
    );
};

AchievementsCard.propTypes = {};

const Achievement = props => {
    const classes = useStyles();
    return (
        <Card variant="outlined" className={classes.aContainer}>
                <div className={classes.aTitleContainer}>
                    <Typography
                        color="primary"
                        className={classes.aTitle}
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        color="secondary"
                        className={classes.aExtra}
                    >
                        {props.extra}
                    </Typography>
                </div>
                <Typography
                    color="textSecondary"
                    className={classes.aDescription}
                >
                    {props.description}
                </Typography>
        </Card>
    );
}

Achievement.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    extra: PropTypes.string
}

export default AchievementsCard;