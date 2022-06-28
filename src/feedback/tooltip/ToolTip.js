import React, {useContext, useEffect, useId, useRef} from "react"

import PropTypes from "prop-types"
import styles from "./styles/ToolTip.module.css"
import ThemeContext from "../../misc/hooks/ThemeContext"
import fabricStyles from "../../Fabric.module.css"
import * as DOM from "react-dom/client"

export default function ToolTip(props) {
    const theme = useContext(ThemeContext)
    const toolTip = (
        <div className={[styles.container,theme.dark ? fabricStyles.dark : fabricStyles.light].join(" ")}
            style={{animationDelay: props.animationDelay}}>
            <div className={[styles.content, props.className].join(" ")} style={props.styles}>
                {props.content === undefined ? props.children : props.content}
            </div>
        </div>
    )
    const ref = useRef({})
    const id = useId()
    const handleMouseMove = (event) => {
        const bBox = document[id]?.getBoundingClientRect()
        document[id].style.left = (event.clientX + 10) + "px"
        document[id].style.top = (event.clientY + 10) + "px"

        let transform = {x: "0px", y: "0px"}
        if ((event.clientX + 10 + bBox.width) > document.body.offsetWidth)
            transform.x = "calc(-100% - 10px)"
        if ((event.clientY + 10 + bBox.height) > document.body.offsetHeight)
            transform.y = "calc(-100% - 10px)"

        document[id].style.transform = `translate(${transform.x}, ${transform.y})`
    }

    const hover = (event) => {
        document[id] = document.createElement("div")
        document.body.appendChild(document[id])
        document[id].setAttribute("id", id)
        document[id].style.position = "fixed"
        document[id].style.zIndex = "999"
        const root = DOM.createRoot(document[id])
        root.render(toolTip)
        document[id].style.left = (event.clientX + 10) + "px"
        document[id].style.top = (event.clientY + 10) + "px"
        document.addEventListener("mousemove", handleMouseMove)
        ref.current?.parentNode.addEventListener("mouseleave", () => {
            try{
                root.unmount()
                document.body.removeChild(document[id])
            }catch (err){
                console.error(err)
            }
            document.removeEventListener("mousemove", handleMouseMove)
        }, {once: true})
    }

    useEffect(() => {
        ref.current?.parentNode.addEventListener("mouseenter", hover)
        return () => {
            ref.current?.parentNode.removeEventListener("mouseenter", hover)
            document.removeEventListener("mousemove", handleMouseMove)
        }
    }, [props.children, props.content])

    return <div ref={ref} style={{display: "none"}}/>
}

ToolTip.propTypes = {
    className: PropTypes.string,
    styles: PropTypes.object,

    content: PropTypes.string,
    children: PropTypes.node,
    animationDelay: PropTypes.string
}
