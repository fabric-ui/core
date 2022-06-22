import React, {useContext, useEffect, useRef} from "react"

import PropTypes from "prop-types"
import styles from "./styles/ToolTip.module.css"
import ThemeContext from "../../misc/hooks/ThemeContext"
import fabricStyles from "../../Fabric.module.css"
import * as DOM from "react-dom/client"

export default function ToolTip(props) {
   const theme = useContext(ThemeContext)
   const toolTip = (
      <div className={[styles.container,theme.dark ? fabricStyles.dark : fabricStyles.light].join(' ')}
           style={{animationDelay: props.animationDelay}}>
         <div className={[styles.content, props.className].join(' ')} style={props.styles}>
            {props.content === undefined ? props.children : props.content}
         </div>
      </div>
   )
   const ref = useRef()
   const mountingPoint = useRef();

   const handleMouseMove = (event) => {
      const bBox = mountingPoint.current?.getBoundingClientRect()

      mountingPoint.current.style.left = (event.clientX + 10) + 'px'
      mountingPoint.current.style.top = (event.clientY + 10) + 'px'

      let transform = {x: '0px', y: '0px'}
      if ((event.clientX + 10 + bBox.width) > document.body.offsetWidth)
         transform.x = 'calc(-100% - 10px)'
      if ((event.clientY + 10 + bBox.height) > document.body.offsetHeight)
         transform.y = 'calc(-100% - 10px)'

      mountingPoint.current.style.transform = `translate(${transform.x}, ${transform.y})`
   }
   const hover = (event) => {
      if (ref.current?.parentNode) {
         mountingPoint.current.style.position = 'fixed'
         mountingPoint.current.style.zIndex = '999'
         const root = DOM.createRoot(mountingPoint.current)
         root.render(toolTip)
         mountingPoint.current.style.left = (event.clientX + 10) + 'px'
         mountingPoint.current.style.top = (event.clientY + 10) + 'px'

         document.addEventListener('mousemove', handleMouseMove)
         ref.current?.parentNode.addEventListener('mouseleave', () => {
            root.unmount()
            document.removeEventListener('mousemove', handleMouseMove)
         }, {once: true})
      }
   }

   useEffect(() => {
      const m = document.getElementById('tooltip-mounting-point')
      if (!mountingPoint.current && !m) {
         mountingPoint.current = document.createElement("div")
         mountingPoint.current.setAttribute('id', 'tooltip-mounting-point')
         document.body.appendChild(mountingPoint.current)
      } else
         mountingPoint.current = m
      ref.current?.parentNode.addEventListener('mouseenter', hover)

      return () => {

         ref.current?.parentNode.removeEventListener('mouseenter', hover)
         document.removeEventListener('mousemove', handleMouseMove)
      }
   }, [])

   return <div ref={ref} style={{display: 'none'}}/>
}

ToolTip.propTypes = {
   className: PropTypes.string,
   styles: PropTypes.object,

   content: PropTypes.string,
   children: PropTypes.node,
   animationDelay: PropTypes.string
}
