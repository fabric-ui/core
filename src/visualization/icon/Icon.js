import React from "react"
import PropTypes from "prop-types";
import styles from "./styles/Icon.module.css"

export default function Icon(props){
   return (
      <span className={[props.className, styles.icon].join(' ')} style={{fontSize: props.size, ...props.styles}}>{props.children}</span>
   )
}

Icon.propTypes={
   className: PropTypes.string,
   size: PropTypes.string,
   styles: PropTypes.object,
   children: PropTypes.node.isRequired
}
