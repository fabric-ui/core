import React from 'react'
import PropTypes from 'prop-types'

export default function NavigationGroup(props) {
   return props.children
}
NavigationGroup.propTypes = {
   children: PropTypes.node,
   justify: PropTypes.oneOf(['end', 'start']),

}
