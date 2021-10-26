import PropTypes from "prop-types";
import styles from '../styles/Apps.module.css'
import ToolTip from "../../../../../feedback/tooltip/ToolTip";
import React from "react";
import Button from "../../../../../inputs/button/Button";

export default function App(props) {
    return (
        <Button
            variant={"outlined"}
            disabled={props.disabled}
            onClick={() => props.redirect(props.path)}>
            {props.icon}
            <div className={[styles.appLabel, styles.overflowEllipsis].join(' ')}>
                {props.label}
            </div>
            <ToolTip content={props.label}/>
        </Button>
    )
}
App.propTypes = {
    disabled: PropTypes.bool,
    path: PropTypes.string,
    redirect: PropTypes.func,
    icon: PropTypes.object,
    label: PropTypes.string
}
