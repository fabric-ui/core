import styles from "../styles/Form.module.css";
import {ArrowBackRounded} from "@material-ui/icons";
import React from "react";
import PropTypes from "prop-types";
import Button from "../../button/Button";

export default function Header(props) {
    return (
        <div className={[styles.headerContainer, styles.header].join(' ')}
             style={{display: props.noHeader ? 'none' : undefined}}>
            <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '8px'}}>
                <Button className={styles.buttonContainer} color={'secondary'}
                        style={{display: props.returnButton ? undefined : 'none'}}
                        onClick={() => props.handleClose()}>
                    <ArrowBackRounded/>
                </Button>
                {props.title}
            </div>
        </div>
    )
}

Header.propTypes = {
    noHeader: PropTypes.bool,
    handleClose: PropTypes.func,
    title: PropTypes.string,
    returnButton: PropTypes.bool
}
