import React from 'react'
import * as PropTypes from "prop-types";
import styles from './styles/Header.module.css'

export default function Header(props){
   return (
      <header className={[styles.wrapper, props.className].join(' ')} style={props.styles}>
         {props.children}
      </header>
   )
}
Header.propTypes={
   children: PropTypes.func,
   styles: PropTypes.object,
   className: PropTypes.string
}
