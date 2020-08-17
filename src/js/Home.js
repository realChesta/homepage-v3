import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles.js";
import Grid from "@material-ui/core/Grid";
import TitleCard from "./cards/TitleCard.js";
import Backdrop from "./Backdrop.js";

const useStyles = makeStyles(theme => ({
    background: {
        width: '100vw',
        height: '100vh'
    }
}));

const Home = props => {
    const classes = useStyles();

    return (
        <Backdrop>
            <Grid
                container
                justify="center" alignItems="center"
                className={classes.background}
            >
                <TitleCard/>
            </Grid>
        </Backdrop>
    );
};

Home.propTypes = {};

export default Home;