import styles from "../styles/Form.module.css";
import React from "react";
import EntityLayoutPT from "../locales/EntityLayoutPT";
import PropTypes from "prop-types";
import Button from "../../button/Button";

export default function SubmitButton(props) {
    const lang = EntityLayoutPT
    return (
        <div
            className={[styles.headerContainer, styles.submitContainer].join(' ')}
             style={{
            padding: props.noPadding ? '0' : undefined,
            height: props.noPadding ? 'fit-content' : undefined,
            border: props.noBorder ? 'none' : undefined
        }}>
            <Button
                variant={'filled'} className={styles.saveButton}
                onClick={() => props.submit(props.data, props.clearState)}
                disabled={props.disabled}
            >
                {props.submitLabel ? props.submitLabel : (props.create ? lang.create : lang.save)}
            </Button>
        </div>
    )
}

SubmitButton.propTypes = {
    noBorder: PropTypes.bool,
    data: PropTypes.object,
    submit: PropTypes.func,
    create: PropTypes.bool,
    disabled: PropTypes.bool,
    clearState: PropTypes.func,
    submitLabel: PropTypes.string,
    noPadding: PropTypes.bool,
}
