import styles from "./styles/Input.module.css"
import React, {useMemo} from "react"
import PropTypes from "prop-types"
import shared from "../shared/styles/Shared.module.css"
import ToolTip from "../../feedback/tooltip/ToolTip"
import useLocale from "../../misc/hooks/useLocale"
import Icon from "../../visualization/icon/Icon"


export default function TextArea(props) {
    const translate = useLocale()

    const valid = useMemo(() => ((props.value && props.value.toString().length > 0) || props.value === 0 || props.value === "0"), [props.value])

    return (<div
        data-valid={`${valid}`}
        style={{
            width: props.width,
            height: "fit-content",
            display: "grid",
            alignItems: props.value ? "unset" : "flex-start",
            gap: "4px",
            overflow: "visible"
        }}
    >
        <div
            className={shared.labelContainer}
            style={{
                display: valid || !props.noMargin ? undefined : "none"
            }}
        >
            <div className={shared.overflow}>
                {props.label}
            </div>
        </div>
        <div
            className={[shared.wrapper, styles.focus].join(" ")}
            data-disabled={props.disabled ? props.disabled : undefined}
        >
            <textarea
                disabled={props.disabled}
                placeholder={props.placeholder}
                value={props.value}
                className={styles.inputContainer}
                style={{
                    height: props.height ? props.height : "45px",
                    resize: props.disabled ? "none" : "vertical",
                    overflow: "hidden",
                    transition: "border 150ms ease-in, background 150ms ease-in",
                    position: "relative",
                    zIndex: 5
                }}
                onBlur={() => {
                    if (props.onBlur) props.onBlur()
                }}
                onKeyDown={e => {
                    if (e.code === "Enter" && props.onEnter) props.onEnter()
                }}
                onChange={e => props.handleChange(e.target.value)}
                maxLength={props.maxLength}
            />
        </div>
        <div className={shared.alertLabel}
            style={{
                display: props.noMargin && !props.required && !props.helperText ? "none" : undefined
            }}>
            {props.required ? <div className={shared.overflow} style={{color: !valid ? "#ff5555" : undefined,}}>
                {translate("required")}
            </div> : undefined}
            {props.helperText ? <div className={shared.helperText}>
                <Icon
                    styles={{fontSize: "1rem"}}
                >info</Icon>
                <ToolTip content={props.helperText} align={"start"}/>
            </div> : null}
        </div>
    </div>)
}

TextArea.propTypes = {
    noMargin: PropTypes.bool,
    helperText: PropTypes.string,
    onBlur: PropTypes.func,
    onEnter: PropTypes.func,
    width: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    required: PropTypes.bool,
    maxLength: PropTypes.number,
    disabled: PropTypes.bool,
    height: PropTypes.string,
}
