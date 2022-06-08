import React, {useEffect, useRef, useState} from "react"
import PropTypes from "prop-types"
import styles from "./styles/Context.module.css"

const CONTEXT_BUTTON = 2
export default function ContextWrapper(props) {
    const ref = useRef()
    const contextRef = useRef()
    const [selected, setSelected] = useState()
    const startMoment = useRef(-1)
    let targets = [],
        startPosition = {}

    function handler(event) {
        if (event.type === "mouseup") {
            if (Math.abs(startPosition.x - event.clientX) < 10 && Math.abs(startPosition.y - event.clientY) < 10) {
                targets = document.elementsFromPoint(event.clientX, event.clientY)
                let trigger
                targets = targets.filter((t ) => {
                    let hasAttribute = false
                    Array.from(t.attributes).forEach((attr) => {
                        const has = props.triggers.find((f) => attr.nodeName === f)
                        if (has)
                            hasAttribute = hasAttribute || has

                    })
                    if (hasAttribute) return t
                })

                if (targets.length > 0) {
                    const currentTarget = targets[0]
                    Array.from(currentTarget.attributes).forEach((attr) => {
                        const has = props.triggers.find((f) => attr.nodeName === f)
                        if (has)
                            trigger =  has
                    })

                    setSelected({selected: currentTarget, trigger})
                    if (props.onContext !== undefined)
                        props.onContext(currentTarget)
                   contextRef.current.style.visibility = "visible"
                    contextRef.current.style.zIndex = "999"
                    const bBox = contextRef.current?.getBoundingClientRect()
                    if (event.clientX + bBox.width > document.body.offsetWidth) {
                        contextRef.current.style.left =
                         event.clientX - bBox.width + "px"
                    } else contextRef.current.style.left = event.clientX + "px"
                    if (event.clientY + bBox.height > document.body.offsetHeight) {
                        contextRef.current.style.top = event.clientY + "px"
                    } else
                        contextRef.current.style.top =
                         event.clientY + bBox.height + "px"
                } else setSelected(undefined)

            }
            startPosition = {x: 0, y: 0}
        } else {

            if (event.button === CONTEXT_BUTTON)
                startPosition = {x: event.clientX, y: event.clientY}
            if (
                !document
                    .elementsFromPoint(event.clientX, event.clientY)
                    .includes(contextRef.current)
            ) {
                if (props.onContextOut !== undefined) props.onContextOut(selected)
                setSelected(undefined)
                if (contextRef.current) contextRef.current.style.visibility = "hidden"
                startMoment.current = -1
            }
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handler)
        ref.current?.parentNode.addEventListener("mouseup", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
            ref.current?.parentNode?.removeEventListener("mouseup", handler)
        }
    }, [selected, props.triggers])

    return (
        <>
            <div
                className={[styles.wrapper, props.wrapperClassName].join(" ")}
                style={props.wrapperStyles}
                ref={contextRef}
            >
                {props.content(selected, () => {
                    if (selected) {
                        setSelected(undefined)
                        if (contextRef.current)
                            contextRef.current.style.visibility = "hidden"
                    }
                })}
            </div>
            <div
                {...props.attributes}
               onContextMenu={e => e.preventDefault()}
                className={props.className}
                data-self={"true"}
                style={props.styles}
                ref={ref}

            >
                {props.children}
            </div>
        </>
    )
}

ContextWrapper.propTypes = {
    onContext: PropTypes.func,
    onContextOut: PropTypes.func,
    triggers: PropTypes.arrayOf(PropTypes.string),
    content: PropTypes.func,
    attributes: PropTypes.object,
    children: PropTypes.node,
    wrapperClassName: PropTypes.string,
    wrapperStyles: PropTypes.object,
    styles: PropTypes.object,
    className: PropTypes.string,
}
