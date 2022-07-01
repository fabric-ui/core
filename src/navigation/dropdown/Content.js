import React, {useEffect, useRef} from "react"
import * as PropTypes from "prop-types"
import * as ReactDOM from "react-dom"
import styles from "./styles/Dropdown.module.css"
import fabricStyles from "../../Fabric.module.css"

const offX = 8, offY = 4
const LEFT_LIMIT = 0
function isOverflowing( bBox, bodyBBox) {
    const RIGHT_LIMIT = bodyBBox.width
    let value = "0px"
    if (bBox.x < LEFT_LIMIT)
        value = `calc(50% + ${offX}px)`
    if ((bBox.x + bBox.width) > RIGHT_LIMIT)
        value = (bodyBBox.width - (bBox.x + bBox.width) - offX) + "px"
    return value
}
export default function Content(props) {
    const ref = useRef()
    useEffect(() => {
        const node = ref.current
        node.style.zIndex = "-1"
        const bBox = props.parent.getBoundingClientRect()
        const halfHeight = bBox.height / 2
        node.style.top =  (bBox.top + halfHeight) + "px"
        node.style.left = (bBox.left) + "px"
        node.style.transform =  `translate(0px, ${halfHeight + offY}px)`

        const nBox = node.getBoundingClientRect()
        const body = document.body.getBoundingClientRect()
        let y = `${halfHeight + offY}px`
        if (nBox.y < 0)
            y = "calc(50% + " + ((-nBox.y / 2 - offY + halfHeight) / 2) + "px)"
        if ((bBox.y + nBox.height + bBox.height) > body.height)
            y = `calc(-100% - ${halfHeight + offY}px)`

        node.style.transform =  `translate(${ isOverflowing(nBox, body)}, ${y})`
        node.style.zIndex = "999"
    }, [])
    const handleMouseDown = (event) => {
        if (!document.elementsFromPoint(event.clientX, event.clientY).includes(ref.current))
            props.close()
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleMouseDown)
        return () => document.removeEventListener("mousedown", handleMouseDown)
    }, [props.close])

    return ReactDOM.createPortal((
        <div ref={ref} className={[props.theme.dark ? fabricStyles.dark : fabricStyles.light, styles.buttons, props.modalClassName].join(" ")}
            style={props.modalStyles}>
            {props.children}
        </div>
    ), document.body)
}

Content.propTypes = {
    theme: PropTypes.object,
    close: PropTypes.func,
    children: PropTypes.node,
    parent: PropTypes.object,
    modalClassName: PropTypes.string,
    modalStyles: PropTypes.object
}
