import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import CardWrapper from "../components/CardWrapper.js";
import CardContent from "@material-ui/core/CardContent";
import IconTitle, {IconSubTitle} from "../components/IconTitle.js";
import Card from "@material-ui/core/Card";
import LinearTimeline from "../components/LinearTimeline.js";
import EventList from "../components/EventList.js";

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
    description: "Associate Security Consultant (Intern)\n100%",
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

const useStyles = makeStyles(theme => ({
  inset: {
    margin: '0 1em'
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  }
}));

const ExperienceCard = () => {
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
          <LinearTimeline items={work}/>
          <div className={classes.inset}>
            <IconSubTitle icon="article">
              Other Experience
            </IconSubTitle>
          </div>
          <EventList items={other}/>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

ExperienceCard.propTypes = {};


export default ExperienceCard;