import PropTypes from "prop-types"
import React, {useContext, useEffect, useState} from "react"
import styles from "./styles/Modal.module.css"
import ThemeContext from "../../misc/hooks/ThemeContext"
import useModal from "./hooks/useModal"
import * as ReactDOM from "react-dom"

export default function Modal(props) {
    const {
        animations,
        target,
    } = useModal(props)
    const theme = useContext(ThemeContext)
    const handleMouseDown = (event) => {
        if (!document.elementsFromPoint(event.clientX, event.clientY).includes(target.current))
            props.handleClose()
    }
    const [isClosed, setIsClosed] = useState(!props.open)
    useEffect(() => {
        document.addEventListener("mousedown", handleMouseDown)
        return () => document.removeEventListener("mousedown", handleMouseDown)
    }, [props.open])

    return ReactDOM.createPortal(isClosed && !props.open ? null : (
        <div
            style={{backdropFilter: `blur(${props.blurIntensity ? props.blurIntensity : "5px"})`}}
            className={[styles.wrapper, props.variant === "fit" ? styles.fitContent : styles.fitPage, props.wrapperClassName, theme.dark ? theme.styles.dark : theme.styles.light].join(" ")}
        >
            <div
                className={[props.className, props.open ? animations.enter : animations.exit].join(" ")}
                style={props.styles}
                ref={target}
                onAnimationEnd={() => {
                    if (!props.open) {
                        props.handleClose()
                        setIsClosed(true)
                    }
                    else
                        setIsClosed(false)
                }}>
                {props.children}
            </div>
        </div>
    ), document.body)
}

Modal.propTypes = {

    wrapperClassName: PropTypes.string,
    animationStyle: PropTypes.oneOf(["slide-left", "slide-right", "fade", "slide-bottom", "none"]),
    className: PropTypes.string,
    blurIntensity: PropTypes.any,
    styles: PropTypes.object,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    children: PropTypes.node
}
