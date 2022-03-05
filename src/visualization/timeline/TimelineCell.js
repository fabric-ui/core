import React, {useEffect, useRef} from 'react'

import PropTypes from "prop-types";
import styles from './styles/TimelineCell.module.css'

export default function TimelineCell(props) {
   const ref = useRef()
   useEffect(() => {
      if(typeof props.attributes === 'object')
         Object.keys(props.attributes).forEach(a => {
            ref.current?.setAttribute(a, props.attributes[a])
         })
   }, [props.attributes])
   return (
      <div ref={ref} data-clickable={`${props.onClick !== undefined}`} className={[styles.wrapper, props.className].join(' ')} style={props.styles} onClick={props.onClick}>
         {props.children}
      </div>
   )
}
TimelineCell.propTypes = {
   onClick: PropTypes.func,
   className: PropTypes.string,
   styles: PropTypes.object,
   children: PropTypes.node,
   attributes: PropTypes.object
}
