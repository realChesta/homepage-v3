import React, {useEffect, useState} from "react";
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
import AchievementsCard from "./cards/AchievementsCard.js";
import ProjectsCard from "./cards/ProjectsCard.js";
import {CircularProgress} from "@material-ui/core";

const dataUrl = 'https://raw.githubusercontent.com/realChesta/homepage-v3/master/public/data.json';

const useStyles = makeStyles(theme => ({
    outerContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    outerContainerLoading: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerContainer: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        display: 'flex'
    },
    column: {
        display: 'flex',
        flexDirection: 'column'
    },
    themeSwitcher: {
        position: 'fixed',
        bottom: '5vmin',
        right: '5vmin',
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
    const [data, setData] = useState(null);

    const getThemeIcon = () => themes.isDarkTheme() ?
        <Brightness7Icon className={classes.themeIcon}/> :
        <Brightness4Icon className={classes.themeIcon}/>;

    const loadData = async () => {
        const res = await fetch(dataUrl);
        const d = await res.json();
        setData(d);
    }

    useEffect( () => {
        loadData();
    }, []);

    return (
        <Backdrop>
            <div className={data ? classes.outerContainer : classes.outerContainerLoading}>
                {data ? <Masonry
                    className={classes.innerContainer}
                    columnClassName={classes.column}
                    breakpointCols={breakpoints}
                >
                    <TitleCard/>
                    <PersonalCard/>
                    <EducationCard education={data.education}/>
                    <ExperienceCard experience={data.experience}/>
                    <ProjectsCard projects={data.projects}/>
                    <AchievementsCard achievements={data.achievements}/>
                </Masonry> : <CircularProgress variant="indeterminate"/>
                }
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