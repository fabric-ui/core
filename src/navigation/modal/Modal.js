import PropTypes from "prop-types"
import React, {useContext, useEffect, useRef, useState} from "react"
import styles from "./styles/Modal.module.css"
import ThemeContext from "../../misc/hooks/ThemeContext"
import useModal from "./hooks/useModal"
import * as DOM from "react-dom/client"

export default function Modal(props) {

    const {
        animations, mountingPoint, animate, target, source, getParentPosition
    } = useModal({
        animationStyle: props.animationStyle,
        variant: props.variant
    })
    const context = useContext(ThemeContext)
    const handleMouseDown = (event) => {
        if (!document.elementsFromPoint(event.clientX, event.clientY).includes(target.current) && alreadyRendered)
            props.handleClose()
    }
    const [alreadyRendered, setAlreadyRendered] = useState(false)
    const localRoot = useRef()
    const rooted = useRef(false)
    useEffect(() => {
        const  renderTarget = document.createElement("div")
        document.body.appendChild(renderTarget)
        renderTarget.style.position = "fixed"
        renderTarget.style.zIndex = "999"
        mountingPoint.current = renderTarget

        return () => document.body.removeChild(renderTarget)
    }, [])

    useEffect(() => {
        if (props.open) {
            const position = getParentPosition()
            if(!localRoot.current || !rooted.current) {
                rooted.current = true
                localRoot.current = DOM.createRoot(mountingPoint.current)
            }
            localRoot.current.render((
                <div
                    style={{
                        ...props.variant === "fit" ? {} : {backdropFilter: `blur(${props.blurIntensity ? props.blurIntensity : "10px"})`},
                        ...position,
                        ...context.themes
                    }}
                    className={[styles.wrapper, props.variant === "fit" ? styles.fitContent : styles.fitPage, props.wrapperClassName, context.dark ? context.styles.dark : context.styles.light].join(" ")}
                >
                    <div
                        className={[alreadyRendered ? undefined : animations.enter, props.className].join(" ")}
                        style={props.styles}
                        ref={target}
                        onAnimationEnd={e => {
                            if (e.target.classList.contains(animations.exit)) {
                                setAlreadyRendered(false)
                                props.handleClose()
                                rooted.current = false
                                localRoot.current.unmount()
                            }
                            else
                                setAlreadyRendered(true)
                        }}>
                        {props.children}
                    </div>
                </div>
            ))

        } else if (alreadyRendered)
            animate()
    }, [props.children, props.open, alreadyRendered])


    useEffect(() => {
        document.addEventListener("mousedown", handleMouseDown)
        return () => document.removeEventListener("mousedown", handleMouseDown)
    }, [alreadyRendered, props.open, props.children])

    return <div ref={source} style={{display: "none"}}/>
}

Modal.propTypes = {

    wrapperClassName: PropTypes.string,
    variant: PropTypes.oneOf(["fill", "fit"]),
    animationStyle: PropTypes.oneOf(["slide-left", "slide-right", "fade", "slide-bottom", "none"]),
    className: PropTypes.string,
    blurIntensity: PropTypes.any,
    styles: PropTypes.object,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    children: PropTypes.node
}
