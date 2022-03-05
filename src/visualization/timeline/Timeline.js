import React, {useEffect, useRef, useState} from 'react'

import PropTypes from "prop-types";
import styles from './styles/Timeline.module.css'

export default function Timeline(props) {
   const children = React.Children.toArray(props.children)
   const ref = useRef()
   const [childrenSize, setChildrenSize] = useState()

   useEffect(() => {
      const fc = ref.current.firstChild.firstChild

      if(fc)
         setChildrenSize((props.variant === 'horizontal' ? fc.getBoundingClientRect().width : fc.getBoundingClientRect().height) + 'px')
   }, [props.variant])

   return (
      <div className={styles.wrapper} ref={ref} data-variant={props.variant}>
         <div className={styles.content}>
            {children.map((c, i) => {
               if (i % 2 === 0)
                  return c
               else
                  return <div className={styles.filler} style={props.variant === 'horizontal' ? {width:childrenSize} : {height:childrenSize}}/>
            })}
         </div>
         <div className={styles.column}/>
         <div className={styles.content}>
            {children.map((c, i) => {
               if (i % 2 !== 0)
                  return c
               else
                  return <div className={styles.filler} style={props.variant === 'horizontal' ? {width:childrenSize} : {height:childrenSize}}/>
            })}
         </div>
      </div>
   )
}
Timeline.propTypes = {
   variant: PropTypes.oneOf(['vertical', 'horizontal']),
   children: PropTypes.node.isRequired
}
