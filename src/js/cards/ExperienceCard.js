import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import CardWrapper from "../components/CardWrapper.js";
import CardContent from "@material-ui/core/CardContent";
import IconTitle, {IconSubTitle} from "../components/IconTitle.js";
import Card from "@material-ui/core/Card";
import LinearTimeline from "../components/LinearTimeline.js";
import {Divider} from "@material-ui/core";

const work = [
  {
    year: 2019,
    title: "Triboni AG",
    location: "Zürich, CH",
    description: "Software Engineer\n40%",
    duration: "Aug. 2019 - Jul. 2020"
  },
  {
    year: 2020,
    title: "SEC Consult (Schweiz) AG",
    location: "Zürich, CH",
    description: "Associate Security Consultant\n(Intern) 100%",
    duration: "Jul. 2020 - present"
  }
];

const other = [
  {
    year: 2019,
    title: "University of Zürich",
    location: "Zürich, CH",
    description: "Informatics I Tutor",
    duration: "Sep. 2019 - Dez. 2019"
  }
];

const useStyles = makeStyles(theme => ({}));

const ExperienceCard = props => {
  return (
    <CardWrapper>
      <Card>
        <CardContent>
          <IconTitle icon="work">
            Experience
          </IconTitle>
          <IconSubTitle icon="class">
            Work Experience
          </IconSubTitle>
          <LinearTimeline items={work}/>
          <Divider variant="middle"/>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

ExperienceCard.propTypes = {};


export default ExperienceCard;