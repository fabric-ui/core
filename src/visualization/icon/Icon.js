import React from "react"
import PropTypes from "prop-types"

export default function Icon(props){
    return <span className={props.className} data-icon={"true"} style={{fontSize: props.size, ...props.styles}}>{props.children}</span>
}

Icon.propTypes={
    className: PropTypes.string,
    size: PropTypes.string,
    styles: PropTypes.object,
    children: PropTypes.node.isRequired
}
