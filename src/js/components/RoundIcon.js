import React from 'react';
import Icon from "@material-ui/core/Icon";

const RoundIcon = props => (
    <Icon {...props} className={`material-icons-round ${props.className}`}>
        {props.children}
    </Icon>
);

export default RoundIcon;