import React from "react";
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import TitleCard from "./cards/TitleCard.js";
import Backdrop from "./Backdrop.js";
import PersonalCard from "./cards/PersonalCard.js";
import EducationCard from "./cards/EducationCard.js";

const useStyles = makeStyles(theme => ({
    outerContainer: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerContainer: {
        maxWidth: '100vw',
        maxHeight: '100vh',
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'center',
        flexWrap: 'wrap',
        overflow: 'auto',
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <Backdrop>
            <div className={classes.outerContainer}>
                <div className={classes.innerContainer}>
                    <TitleCard/>
                    <PersonalCard/>
                    <EducationCard/>
                </div>
            </div>
        </Backdrop>
    );
};

Home.propTypes = {};

export default Home;