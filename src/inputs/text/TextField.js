import styles from "./styles/Input.module.css"
import React, {useEffect, useMemo, useRef} from "react"
import PropTypes from "prop-types"
import shared from "../shared/styles/Shared.module.css"
import ToolTip from "../../feedback/tooltip/ToolTip"
import useLocale from "../../misc/hooks/useLocale"
import {useIMask} from "react-imask"
import Icon from "../../visualization/icon/Icon"


export default function TextField(props) {
    const translate = useLocale()
    const maskEndRef = useRef()
    const maskStartRef = useRef()

    const opts = useMemo(() => {
        return props.mask ? {
            mask: props.mask, lazy: true, ...props.maskAttributes
        } : {}
    }, [props.mask, props.maskAttributes])
    const {ref, setValue} = useIMask(opts, {
        onAccept: e => {
            props.handleChange(e.target.value, ref)
        }
    })
    useEffect(() => {
        setValue(props.value ? props.value : "")
    }, [])
    useEffect(() => {

        if (props.maskStart) ref.current.style.paddingLeft = (maskStartRef.current.offsetWidth + 10) + "px"
        if (props.maskEnd) ref.current.style.paddingRight = (maskEndRef.current.offsetWidth + 10) + "px"
    }, [props.maskStart, props.maskEnd])


    const valid = useMemo(() => {
        return ((props.value && props.value.toString().length > 0) || props.value === 0 || props.value === "0")
    }, [props.value])

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
            <div style={{position: "relative", width: "100%"}}>
                <div className={styles.mask} ref={maskStartRef}>
                    {props.maskStart}
                </div>
                <input
                    onKeyDown={e => {
                        if (e.code === "Enter" && props.onEnter) props.onEnter()
                    }}
                    disabled={props.disabled} lang={""}
                    placeholder={props.placeholder}
                    type={props.type}
                    value={props.value ? props.value : ""}
                    ref={ref}
                    onBlur={() => {
                        if (props.onBlur) props.onBlur()
                    }}
                    min="1" max="9999"
                    className={styles.inputContainer}
                    style={{
                        height: props.height ? props.height : "45px", position: "relative", zIndex: 5
                    }}
                    onChange={e => {
                        let data = e.target.value

                        if (props.maxLength && (data.toString().length <= props.maxLength) || !props.maxLength) props.handleChange(data)
                    }}
                    maxLength={props.maxLength}
                />
                <div className={styles.mask} style={{right: "8px", left: "unset"}} ref={maskEndRef}>
                    {props.maskEnd}
                </div>
            </div>
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

TextField.propTypes = {
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

    mask: PropTypes.string,
    maskAttributes: PropTypes.object,

    maxLength: PropTypes.number,

    disabled: PropTypes.bool,
    type: PropTypes.string,

    maskStart: PropTypes.any,
    maskEnd: PropTypes.any,
    height: PropTypes.string,
}
