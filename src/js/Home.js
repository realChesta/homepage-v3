import React, {useState} from "react";
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import TitleCard from "./cards/TitleCard.js";
import Backdrop from "./Backdrop.js";
import PersonalCard from "./cards/PersonalCard.js";
import EducationCard from "./cards/EducationCard.js";
import ExperienceCard from "./cards/ExperienceCard.js";
import Masonry from "react-masonry-css";
import Fab from "@material-ui/core/Fab";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import themes from "../styles/Themes.js";

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
    column: {},
    themeSwitcher: {
        position: 'fixed',
        bottom: '5vh',
        right: '5vh',
    },
    themeIcon: {
        color: theme.palette.background.paper
    }
}));

const breakpoints = {
    default: 3,
    1630: 2,
    1100: 1
};

const Home = () => {
    const classes = useStyles();

    const getThemeIcon = () => themes.isDarkTheme() ?
        <Brightness7Icon className={classes.themeIcon}/> :
        <Brightness4Icon className={classes.themeIcon}/>;

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
            <Fab
                color="primary"
                onClick={() => themes.setDarkTheme(!themes.isDarkTheme())}
                className={classes.themeSwitcher}
            >
                {getThemeIcon()}
            </Fab>
        </Backdrop>
    );
};

Home.propTypes = {};

export default Home;