import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import CardWrapper from "../components/CardWrapper.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconTitle from "../components/IconTitle.js";
import LinearTimeline from "../components/LinearTimeline.js";

const education = [
    {
        year: 2008,
        title: "iDSP",
        location: "Paris, FR",
        description: "internationale Deutsche Schule Paris",
        duration: "2008 - 2014"
    },
    {
        year: 2014,
        title: "MNG Rämibühl",
        location: "Zürich, CH",
        description: "Swiss Matura",
        duration: "2014 - 2017"
    },
    {
        year: 2017,
        title: "ETH Zürich",
        location: "Zürich, CH",
        description: "2 semesters Bsc Inf",
        duration: "2017 - 2018"
    },
    {
        year: 2018,
        title: "University of Zürich",
        location: "Zürich, CH",
        description: "Bachelor of Science in Informatics\nExpected graduation in 2022",
        duration: "2018 - present"
    }
];

const EducationCard = () => {
    return (
        <CardWrapper>
            <Card>
                <CardContent>
                    <IconTitle icon="school">
                        Education
                    </IconTitle>
                    <LinearTimeline
                        items={education}
                        nowItem
                    />
                </CardContent>
            </Card>
        </CardWrapper>
    );
};

EducationCard.propTypes = {};

export default EducationCard;