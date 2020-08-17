import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PersonIcon from '@material-ui/icons/Person';
import IconTitle from "../components/IconTitle.js";

const PersonalCard = props => {
    return (
        <Grid item xs={3}>
            <Card>
                <CardContent>
                    <IconTitle icon={<PersonIcon color="primary"/>}>
                        Personal Details
                    </IconTitle>
                </CardContent>
            </Card>
        </Grid>
    );
};

PersonalCard.propTypes = {};

export default PersonalCard;