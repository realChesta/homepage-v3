import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import CardWrapper from "../components/CardWrapper.js";
import CardContent from "@material-ui/core/CardContent";
import IconTitle, {IconSubTitle} from "../components/IconTitle.js";
import Card from "@material-ui/core/Card";
import LinearTimeline from "../components/LinearTimeline.js";
import EventList from "../components/EventList.js";

const useStyles = makeStyles(theme => ({
    inset: {
        margin: '0 1em'
    },
    divider: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2)
    }
}));

const ExperienceCard = props => {
    const classes = useStyles();
    return (
        <CardWrapper>
            <Card>
                <CardContent>
                    <IconTitle icon="work">
                        Experience
                    </IconTitle>
                    <div className={classes.inset}>
                        <IconSubTitle icon="class">
                            Work Experience
                        </IconSubTitle>
                    </div>
                    <LinearTimeline duration items={props.experience.work}/>
                    <div className={classes.inset}>
                        <IconSubTitle icon="article">
                            Other Experience
                        </IconSubTitle>
                    </div>
                    <EventList items={props.experience.other} />
                </CardContent>
            </Card>
        </CardWrapper>
    );
};

ExperienceCard.propTypes = {
    work: PropTypes.array,
    other: PropTypes.array
};


export default ExperienceCard;