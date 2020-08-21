import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import CardWrapper from "../components/CardWrapper.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconTitle, {IconSubTitle} from "../components/IconTitle.js";

const useStyles = makeStyles(theme => ({
    inset: {
        margin: '0 1em'
    }
}));

const AchievementsCard = props => {
    const classes = useStyles();
    return (
        <CardWrapper>
            <Card style={{transition: '0.5s'}}>
                <CardContent>
                   <IconTitle icon="star">Achievements and Awards</IconTitle>
                    <div className={classes.inset}>
                        <IconSubTitle icon="code">Coding Competitions</IconSubTitle>
                        <IconSubTitle icon="stars">Awards</IconSubTitle>
                    </div>
                </CardContent>
            </Card>
        </CardWrapper>
    );
};

AchievementsCard.propTypes = {

};

export default AchievementsCard;