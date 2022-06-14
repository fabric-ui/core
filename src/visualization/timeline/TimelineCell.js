import React from "react"

import PropTypes from "prop-types"
import styles from "./styles/TimelineCell.module.css"

export default function TimelineCell(props) {
   return (
      <div {...props.attributes} className={[styles.wrapper, props.className].join(' ')} style={props.styles}>
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
