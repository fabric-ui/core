import styles from "./styles/Checkbox.module.css"
import PropTypes from "prop-types"
import React from "react"
import ToolTip from "../../feedback/tooltip/ToolTip"
import useLocale from "../../misc/hooks/useLocale"
import Icon from "../../visualization/icon/Icon"

export default function Checkbox(props) {
    const translate = useLocale()
    return (
        <div className={[styles.wrapper, props.className].join(" ")} data-disabled={`${props.disabled}`}
            style={{
                ...props.styles,
                opacity: props.disabled ? ".8" : 1,
                height: props.height ? props.height : "45px",
                width: props.width,
                paddingLeft: props.required ? undefined : "4px",
                marginTop: props.noMargin ? "0" : "20px"
            }}>
            <div
                className={styles.divider}
                style={{
                    background: typeof props.checked === "boolean" ? "#0095ff" : "#ff5555",
                    display: props.required ? undefined : "none"
                }}/>
            {props.required ? (
                <ToolTip>
                    {translate("required")}
                </ToolTip>
            )
                :
                null}
            <button
                className={styles.container}
                disabled={props.disabled}
                style={{
                    background: props.checked ? "var(--fabric-accent-color)" : undefined,
                    border: props.checked ? "var(--fabric-accent-color) 1px solid" : undefined
                }}
                onClick={() => props.handleCheck(props.checked)}>
                <Icon
                    styles={{
                        color: "white",
                        visibility: props.checked ? "visible" : "hidden",
                        fontSize: "15px",
                        fontWeight: "bold"
                    }}>done</Icon>

            </button>
            {props.label ?
                <label style={{fontSize: ".7rem", fontWeight: "550"}}>
                    {props.label}
                </label>
                : null}
        </div>
    )
}
Checkbox.propTypes = {
    styles: PropTypes.object,
    className: PropTypes.string,

    noMargin: PropTypes.bool,
    checked: PropTypes.bool,
    handleCheck: PropTypes.func.isRequired,
    label: PropTypes.any,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    height: PropTypes.string,
    width: PropTypes.string
}
