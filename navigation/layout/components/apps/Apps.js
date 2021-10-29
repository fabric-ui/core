import React, {useState} from "react";
import styles from "./styles/Apps.module.css";
import {AppsRounded} from "@material-ui/icons";
// import AnimationFrame from "../layout/templates/AnimationFrame";
import PropTypes from 'prop-types'
import AppsWrapper from "./templates/AppsWrapper";
import App from "./templates/App";
import AnimationFrame from "../../templates/AnimationFrame";
import Button from "../../../../inputs/button/Button";

export default function Apps(props) {
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.appsContainer} onBlur={event => {
            if (!event.currentTarget.contains(event.relatedTarget))
                setOpen(false)
        }}>

            <Button
                onClick={() => setOpen(!open)}
                highlight={open}
                className={styles.buttonContainer}
            >
                <AppsRounded/>
            </Button>
            <AnimationFrame render={open}>

                <AppsWrapper>
                    {props.buttons.map((button, index) => (
                        <React.Fragment key={'app-button-' + index}>
                            <App {...button}/>
                        </React.Fragment>
                    ))}
                </AppsWrapper>
            </AnimationFrame>
        </div>
    )
}
Apps.propTypes = {

    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            icon: PropTypes.any,
            disabled: PropTypes.bool,
            onClick: PropTypes.func.isRequired
        })
    )
}
