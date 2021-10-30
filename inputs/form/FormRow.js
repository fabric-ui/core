import PropTypes from 'prop-types'
import styles from "./styles/FormRow.module.css";
import React from "react";

export default function FormRow(props) {

    return (
        <div className={styles.wrapper}>
            <h1 style={{display: props.title === undefined ? 'none' : undefined}}
                    className={styles.legend}>{props.title}</h1>
            {props.children}
        </div>
    )
}

FormRow.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
}