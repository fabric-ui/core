import PropTypes from "prop-types"
import useField from "../hooks/useField"
import styles from "../styles/Row.module.css"
import React, {useMemo, useState} from "react"

export default function RowKey(props) {
    const [color, setColor] = useState()
    const data = useField(props.field, props.object, props.field.method, setColor, props.asCard)
    const hiddenLabel = useMemo(() => {
        return props.selfContained && props.field.label && !props.field.hideLabel
    }, [props])
    return (
        <div className={styles.row}
            style={{
                height: props.field.type === "image" ? "100%" : undefined,
                color: color,
                padding: props.field.type !== "image" ? props.asCard ? "2px 6px" : undefined : "0",
                width: props.field.additionalWidth ? `calc(100% + ${props.field.additionalWidth})` : undefined
            }}
        >
            <div
                className={[styles.cell, props.className].join(" ")}
                onClick={props.field.onClick}
                title={props.field.type !== "image" ? props.field.type === "string" ? props.object[props.field.key] : data : null}
                style={{
                    ...props.styles,
                    alignItems: (props.field.hideLabel || !props.selfContained)  && !props.asCard? "center" : undefined
                }}
            >
                {hiddenLabel && props.asCard ?
                    <label className={styles.footer} title={props.noTitle ? undefined : props.field.label}>
                        {props.field.label}:
                    </label> : null}
                {typeof data === "string" ?
                    <div className={styles.overflow}>
                        {data}
                    </div>
                    :
                    data
                }
            </div>
            {hiddenLabel && !props.asCard ?
                <label className={styles.footer} title={props.noTitle ? undefined : props.field.label}>
                    {props.field.label}
                </label> : null}
        </div>
    )
}

RowKey.propTypes = {
    className: PropTypes.string,
    styles: PropTypes.object,
    index: PropTypes.number,
    selfContained: PropTypes.bool,
    object: PropTypes.object.isRequired,
    asCard: PropTypes.bool,

    field: PropTypes.shape({
        label: PropTypes.string,
        key: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["number", "string", "bool", "date", "object", "image"]).isRequired,
        subfieldKey: PropTypes.string,
        hoursOffset: PropTypes.number,
        method: PropTypes.func,
        maskStart: PropTypes.any,
        maskEnd: PropTypes.any,
        additionalWidth: PropTypes.string,
        onClick: PropTypes.func,
        hideLabel: PropTypes.bool,
    }).isRequired,

    noTitle: PropTypes.bool

}
