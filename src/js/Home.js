import React from "react";
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import TitleCard from "./cards/TitleCard.js";
import Backdrop from "./Backdrop.js";
import PersonalCard from "./cards/PersonalCard.js";
import EducationCard from "./cards/EducationCard.js";
import ExperienceCard from "./cards/ExperienceCard.js";
import Masonry from "react-masonry-css";

const useStyles = makeStyles(theme => ({
  outerContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'auto'
  },
  innerContainer: {
    display: 'flex',
  },
  column: {}
}));

const breakpoints = {
  default: 3,
  1500: 2,
  1000: 1
};

const Home = () => {
  const classes = useStyles();

  return (
    <Backdrop>
      <div className={classes.outerContainer}>
      <Masonry
        className={classes.innerContainer}
        columnClassName={classes.column}
        breakpointCols={breakpoints}
      >
        <TitleCard/>
        <PersonalCard/>
        <EducationCard/>
        <ExperienceCard/>
      </Masonry>
      </div>
    </Backdrop>
  );
};

Home.propTypes = {};

export default Home;