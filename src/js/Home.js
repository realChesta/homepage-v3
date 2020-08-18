import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import TitleCard from "./cards/TitleCard.js";
import Backdrop from "./Backdrop.js";
import PersonalCard from "./cards/PersonalCard.js";
import {useWindowSize} from "./hooks/useWindowSize.js";

const useStyles = makeStyles(theme => ({
    container: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
}));

const Home = props => {
    const classes = useStyles();
    const size = useWindowSize();

    const flexDirection = (size.width < 800) ? 'column' : 'row';

    return (
        <Backdrop>
            <div className={classes.container} style={{flexDirection}}>
                <TitleCard/>
                <PersonalCard/>
            </div>
        </Backdrop>
    );
};

Home.propTypes = {};

export default Home;