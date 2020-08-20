import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import CardWrapper from "../components/CardWrapper.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconTitle from "../components/IconTitle.js";

const useStyles = makeStyles(theme => ({

}));

const AchievementsCard = props => {
    return (
        <CardWrapper>
            <Card>
                <CardContent>
                   <IconTitle icon="star">Achievements and Awards</IconTitle>

                </CardContent>
            </Card>
        </CardWrapper>
    );
};

AchievementsCard.propTypes = {

};

export default AchievementsCard;