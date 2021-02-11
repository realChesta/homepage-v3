import React from 'react';
import Icon from "@material-ui/core/Icon";

const RoundIcon = props => (
    <Icon {...props} className={`material-icons-outlined ${props.className}`}>
        {props.children}
    </Icon>
);

export default RoundIcon;