import React from 'react';
import PropTypes from 'prop-types';
import CardWrapper from "../components/CardWrapper.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconTitle from "../components/IconTitle.js";
import LinearTimeline from "../components/LinearTimeline.js";

const EducationCard = props => {
    return (
        <CardWrapper>
            <Card style={{transition: '0.5s'}}>
                <CardContent>
                    <IconTitle icon="school">
                        Education
                    </IconTitle>
                    <LinearTimeline
                        items={props.education}
                        nowItem
                    />
                </CardContent>
            </Card>
        </CardWrapper>
    );
};

EducationCard.propTypes = {
    education: PropTypes.array
};

export default EducationCard;