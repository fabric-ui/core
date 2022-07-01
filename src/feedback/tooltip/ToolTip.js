import React, {useContext, useEffect, useId, useRef, useState} from "react"

import PropTypes from "prop-types"
import styles from "./styles/ToolTip.module.css"
import ThemeContext from "../../misc/hooks/ThemeContext"
import fabricStyles from "../../Fabric.module.css"
import * as ReactDOM from "react-dom"

export default function ToolTip(props) {
    const theme = useContext(ThemeContext)
    const id = useId()
    const ref = useRef({})
    const [open, setOpen] = useState(false)
    let bBox, node
    const handleMouseMove = (event) => {
        if(!bBox)
            bBox = node.getBoundingClientRect()
        node.style.left = (event.clientX + 10) + "px"
        node.style.top = (event.clientY + 10) + "px"

        let transform = {x: "0px", y: "0px"}
        if ((event.clientX + 10 + bBox.width) > document.body.offsetWidth)
            transform.x = "calc(-100% - 10px)"
        if ((event.clientY + 10 + bBox.height) > document.body.offsetHeight)
            transform.y = "calc(-100% - 10px)"

        node.style.transform = `translate(${transform.x}, ${transform.y})`
    }

    const hover = (event) => {

        setOpen(true)
        node = document.getElementById(id)
        if(ref.current && node) {
            node.style.left = (event.clientX + 10) + "px"
            node.style.top = (event.clientY + 10) + "px"
            document.addEventListener("mousemove", handleMouseMove)
            ref.current.parentNode.addEventListener(
                "mouseleave",
                () => {
                    document.removeEventListener("mousemove", handleMouseMove)
                    setOpen(false)
                    bBox = undefined
                },
                {once: true}
            )
        }
    }

    useEffect(() => {
        ref.current.parentNode.addEventListener("mouseenter", hover)
        return () => {
            if(ref.current && ref.current.parentNode)
                ref.current.parentNode.removeEventListener("mouseenter", hover)
        }
    }, [open])



    return (
        <div ref={ref} style={{display: "none"}}>
            {typeof window !== "undefined" && open ?
                ReactDOM.createPortal(
                    <div
                        id={id}
                        className={[styles.container, theme.dark ? fabricStyles.dark : fabricStyles.light].join(" ")}
                        style={{animationDelay: props.animationDelay}}
                    >
                        <div className={[styles.content, props.className].join(" ")} style={props.styles}>
                            {props.content === undefined ? props.children : props.content}
                        </div>
                    </div>,
                    document.body
                )
                :
                null
            }
        </div>
    )
}

ToolTip.propTypes = {
    className: PropTypes.string,
    styles: PropTypes.object,

    content: PropTypes.string,
    children: PropTypes.node,
    animationDelay: PropTypes.string
}
