import React, {useCallback, useEffect, useRef} from "react"
import * as PropTypes from "prop-types";
import * as ReactDOM from "react-dom";
import styles from "./styles/Dropdown.module.css";

export default function Content(props) {
   const getParentPosition = (node) => {
      const bBox = props.parent.getBoundingClientRect()
      const halfHeight = bBox.height / 2
      node.style.top =  (bBox.top + halfHeight) + "px"
      node.style.left = (bBox.left + bBox.width / 2) + "px"

      const nBox = node.getBoundingClientRect()
      const body = document.body.getBoundingClientRect()
      const offX = 8,
         offY = 4
      let y = `calc(-50% + ${bBox.height}px)`,
         x = "-50%"
      if (nBox.y < 0)
         y = "calc(50% + " + ((-nBox.y / 2 - offY + halfHeight) / 2) + "px)"
      if (nBox.x < 0)
         x = "calc(-50% + " + offX + "px)"
      if ((bBox.y + nBox.height + bBox.height) > body.height)
         y = `calc(-50% - ${bBox.height}px)`
      if ((nBox.x + nBox.width) > body.width)
         x = (body.width - (nBox.x + nBox.width) - offX) + "px"
      return `translate(${x}, ${y})`
   }
   const ref = useRef()
   useEffect(() => {
      const node = ref.current
      const t = getParentPosition(node)
      node.style.position = "fixed"
      node.style.zIndex = "999"

      node.style.transform = t
   }, [])
   const handleMouseDown = (event) => {
      if (!document.elementsFromPoint(event.clientX, event.clientY).includes(ref.current))
         props.close()
   }
   useEffect(() => {
      document.addEventListener("mousedown", handleMouseDown)
      return () => document.removeEventListener("mousedown", handleMouseDown)
   }, [])

   return ReactDOM.createPortal((
         <div ref={ref} className={[styles.buttons, props.modalClassName].join(" ")}
              style={props.modalStyles}>
            {props.children}
         </div>
      ),
      document.body
   )
}

Content.propTypes = {
   close: PropTypes.func,
   children: PropTypes.node,
   parent: PropTypes.object,
   modalClassName: PropTypes.string,
   modalStyles: PropTypes.object
}
